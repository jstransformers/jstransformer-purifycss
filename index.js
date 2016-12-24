'use strict'

var purify = require('purify-css')
var extend = require('extend-shallow')

exports.name = 'purifycss'
exports.inputFormats = ['purifycss', 'purify-css']
exports.outputFormat = 'css'

var defaults = {
  content: ''
}

exports.render = function (str, options, locals) {
  options = extend({}, defaults, options, locals)
  var content = options.content
  delete options.content
  return purify(content, str, options)
}

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve) {
    options = extend({}, defaults, options, locals)
    var content = options.content
    delete options.content
    purify(content, str, options, resolve)
  })
}
