# iso3166-2 (UNDER DEVELOPMENT/BETA)
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url] [![Build Status][drone-build-image]][drone-build-url]

---
this isn't ready for primetime just yet :)... sorry.
---


The smallest, fastest, node module for resolving ISO 3166-2 geographic subdivisions. Browserify/Webpack friendly.

## it's totally small!
```
$ browserify iso3166-2.js | wc -c | numfmt --to=iec --suffix=B --format="%3f"

$ browserify iso3166-2.js | uglifyjs | wc -c | numfmt --to=iec --suffix=B --format="%3f"

$ browserify iso3166-2.js | uglifyjs - --screw-ie8 --compress --mangle | yuicompressor --type js -o iso3166-2.js && cat iso3166-2.js | wc -c | numfmt --to=iec --suffix=B --format="%3f"

```
## with over 240 countries and completely update to date with ISO standards!
```
> var countries = require('./countries.json')
> Object.keys(countries).length
250
>
...
```

## example usage
```
var iso31662 = require('iso3166-2')
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
