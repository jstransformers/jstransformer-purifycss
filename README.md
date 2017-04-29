# jstransformer-purifycss

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-purifycss.svg)](https://greenkeeper.io/)

[PurifyCSS](https://github.com/purifycss/purifycss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-purifycss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-purifycss)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-purifycss/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-purifycss)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-purifycss/master.svg)](http://david-dm.org/jstransformers/jstransformer-purifycss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-purifycss.svg)](https://www.npmjs.org/package/jstransformer-purifycss)

## Installation

    npm install jstransformer-purifycss

## API

```js
var purifycss = require('jstransformer')(require('jstransformer-purifycss'))

var options = {
  content: "index.html",
  minify: true
}

purifycss.renderFile('example.css', options).body
//=> Purified CSS
```

## License

MIT
