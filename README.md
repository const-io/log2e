LOG2E
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Base 2 logarithm of the mathematical constant [*e*][const-e].


## Installation

``` bash
$ npm install const-log2e
```


## Usage

``` javascript
var LOG2E = require( 'const-log2e' );
```

#### LOG2E

Base 2 logarithm of the mathematical constant [*e*][const-e].

``` javascript
LOG2E === 1.4426950408889634;
```


## Examples

``` javascript
var LOG2E = require( 'const-log2e' );

console.log( LOG2E );
// returns 1.4426950408889634
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-log2e.svg
[npm-url]: https://npmjs.org/package/const-log2e

[build-image]: http://img.shields.io/travis/const-io/log2e/master.svg
[build-url]: https://travis-ci.org/const-io/log2e

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/log2e/master.svg
[coverage-url]: https://codecov.io/github/const-io/log2e?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/log2e.svg
[dependencies-url]: https://david-dm.org/const-io/log2e

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/log2e.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/log2e

[github-issues-image]: http://img.shields.io/github/issues/const-io/log2e.svg
[github-issues-url]: https://github.com/const-io/log2e/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[const-e]: https://github.com/const-io/e
