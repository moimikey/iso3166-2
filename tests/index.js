var test     = require('tape')
var iso31662 = require('../lib')

test('returns an iso31662 object', function (t) {
  t.plan(1)
  t.equal(typeof iso31662, 'object')
  t.end()
})

test('has a callable list function', function (t) {
  t.plan(1)
  t.equal(typeof iso31662.list, 'function')
  t.end()
})

test('`set` should not set if the provided string is not an ISO 3166-1 alpha 2 code', function (t) {
  t.plan(1)
  t.doesNotEqual(iso31662.set('DEU').state, 'DEU')
  t.end()
})

test('`Germany` has a sub-division called `Thüringen`', function (t) {
  t.plan(2)
  t.equal(iso31662.set('DE').has('Thüringen'), true)
  t.equal(iso31662.set('DE').has('Th\xFCringen'), true)
  t.end()
})

test('`Germany` has an iso3 code of `DEU`', function (t) {
  t.plan(1)
  t.equal(iso31662.set('DE').iso3(), 'DEU')
  t.end()
})

test('`Germany` has 16 subdivisions', function (t) {
  t.plan(1)
  t.equal(iso31662.set('DE').count(), 16)
  t.end()
})

test('returns a styled object of all countries and total count using `all`', function (t) {
  t.plan(3)
  t.equal(typeof iso31662.all(), 'object')
  t.equal(typeof iso31662.all().count, 'number')
  t.equal(typeof iso31662.all().list, 'object')
  t.end()
})

test('there should be a total count of `202` countries', function (t) {
  t.plan(1)
  t.equal(iso31662.all().count, 202)
  t.end()
})

test.skip('`iso3` is not callable without being chained to `set`', function (t) {
  t.plan(1)
  t.throws(function() {
    iso31662.iso3()
  }, /failed/)
  t.end()
})

test.skip('`has` is not callable without being chained to `set`', function (t) {
  t.plan(1)
  t.throws(function() {
    iso31662.set('DE').has('Tung')
  }, /failed/)
  t.end()
})

