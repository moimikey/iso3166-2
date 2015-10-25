const fs = require('fs')
const zlib = require('zlib-browserify')
const path = require('path')
const database = fs.readFileSync(path.join(__dirname, '../data', '/countries.json.gz'))
const countries = JSON.parse(zlib.gunzipSync(database), 'utf-8')[0]
const jsesc = require('jsesc')
const { isString, size, contains } = require('lodash')

export default new class iso31662 {
  constructor(iso2) {
    this.state = iso2
    this.countries = countries
    this.details = void 0
  }

  /**
   * set an initial country by ISO 3166-1 alpha 2
   * @param {String} iso2
   */
  set(iso2) {
    if (!isString(iso2) || size(iso2) !== 2) return this
    this.state = iso2
    this.details = this.countries[this.state]
    return this
  }

  /**
   * returns a styled object of all countries and
   * total count
   * @return {Object}
   */
  all() {
    const list  = this.countries
    const count = size(list)

    return {
      get count() {
        return count
      },
      get list() {
        return list
      }
    }
  }

  /**
   * returns a raw array of countries as objects
   * @return {Array}
   */
  raw() {
    return this.countries
  }

  /**
   * returns a list of subdivisions respective to
   * the set country
   * @return {Array}
   */
  list() {
    return this.countries[this.state].subdivisions
  }

  /**
   * returns a numeric count
   * @return {Number}
   */
  count() {
    if (!this.state) return this.countries.length
    return this.countries[this.state].subdivisions.length
  }

  /**
   * returns the ISO 3166-1 alpha 3 code for the set country
   * @return {String}
   */
  iso3() {
    if (!this.state) throw new Error(`#iso3 is not directly callable.`)
    return this.countries[this.state].country.iso3
  }

  /**
   * predicate to whether the specified subdivision exists under
   * the set country
   * @param  {String}  subdivision
   * @return {Boolean}
   */
  has(subdivision) {
    if (!this.state) throw new Error(`#has is not directly callable.`)
    return contains(this.countries[this.state].subdivisions, jsesc(subdivision))
  }
}
