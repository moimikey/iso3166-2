# iso3166-2

[![Greenkeeper badge](https://badges.greenkeeper.io/moimikey/iso3166-2.svg)](https://greenkeeper.io/)
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url] [![Build Status][drone-build-image]][drone-build-url]

The smallest, fastest, node module for resolving ISO 3166-2 geographic subdivisions. Browserify/Webpack friendly.

## it's totally small!
```
$ browserify -t babelify -t brfs src/index.js | wc -c | numfmt --to=iec --suffix=B --format="%3f"
> 129KB
$ browserify -t babelify -t brfs src/index.js | ./uglifyjs --noerr --screw-ie8 -m -c 2> /dev/stdout | wc -c | numfmt --to=iec --suffix=B --format="%3f"
> 95KB
$ browserify -t babelify -t brfs src/index.js | ./uglifyjs --noerr --screw-ie8 -m -c 2> /dev/stdout | gzip | wc -c | numfmt --to=iec --suffix=B --format="%3f"
> 53KB
```
## with over 200 countries and completely update to date with ISO standards!
```
> var countries = require('./countries.json')
> Object.keys(countries.list()).length
202
>
...
```

## example usage
```
> const iso31662 from 'iso3166-2'
> iso31662.set('DE').has('Thüringen')
true
> iso31662.set('DE').has('Th\xFCringen')
true
> iso31662.set('DE').iso3
"DEU"
> iso31662.set('DE').count
16
> iso31662.set('DE').list

> iso31662.coun
> iso31662.all()
{ AF:
   { country: { name: 'Afghanistan', iso3: 'AFG' },
     subdivisions:
      [ 'Badakhsh\\u0101n',
        'Baghl\\u0101n',
        'Balkh',
...
```

[npm-version-url]: https://www.npmjs.com/package/iso3166-2
[npm-version-image]: https://img.shields.io/npm/v/iso3166-2.svg
[npm-license-url]: https://github.com/moimikey/iso3166-2/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/iso3166-2.svg
[npm-downloads-url]: https://www.npmjs.com/package/iso3166-2
[npm-downloads-image]: https://img.shields.io/npm/dm/iso3166-2.svg
[npm-deps-url]: https://david-dm.org/moimikey/iso3166-2
[npm-deps-image]: https://img.shields.io/david/moimikey/iso3166-2.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/iso3166-2
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/iso3166-2.svg
[drone-build-image]: https://drone.io/github.com/moimikey/iso3166-2/status.png
[drone-build-url]: https://drone.io/github.com/moimikey/iso3166-2/latest
