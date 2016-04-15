# mdconf-from

> parses a markdown file and returns a configuration object

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

[![NPM version](https://badge.fury.io/js/mdconf-from.svg)](http://badge.fury.io/js/mdconf-from) [![Build Status](https://travis-ci.org/fibo/mdconf-from.svg?branch=master)](https://travis-ci.org/fibo/mdconf-from?branch=master) [![Dependency Status](https://gemnasium.com/fibo/mdconf-from.svg)](https://gemnasium.com/fibo/mdconf-from)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installation

```
npm install mdconf-from --save
```

## API

### `mdconfFrom(file)`

* **@param** `{String}` file relative path
* **@returns** `{Object}` config

```
// Suppose you are parsing this file itself.
var config = require('mdconf-from')('README.md')

console.log(config.foo) // bar
```

## Configuration

This package does not use any configuration at all, this section is
here only for test and documentation purpouse.

* foo: bar

## Annotated source

See [mdconf][mdconf] to learn how *Markdown driven configuration* works.

    var fs = require('fs')
    var mdconf = require('mdconf')

    function mdconfFrom (file) {
      var content = fs.readFileSync(file, 'utf8')

      var markdownObj = mdconf(content)

      var rootKey = Object.keys(markdownObj)[0]

Assume there is a `## Configuration` section and read it

      var config = markdownObj[rootKey].configuration

      return config
    }

    module.exports = mdconfFrom

## License

[MIT](http://g14n.info/mit-license)

[mdconf]: https://github.com/tj/mdconf
