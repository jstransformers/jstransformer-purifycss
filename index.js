'use strict'

const purify = require('purify-css')
const extend = require('extend-shallow')

exports.name = 'purifycss'
exports.inputFormats = ['purifycss', 'purify-css']
exports.outputFormat = 'css'

const defaults = {
  content: ''
}

exports.render = function (str, options, locals) {
  options = extend({}, defaults, options, locals)
  const content = options.content
  delete options.content
  return purify(content, str, options)
}

exports.renderAsync = function (str, options, locals) {
  return new Promise(resolve => {
    options = extend({}, defaults, options, locals)
    const content = options.content
    delete options.content
    purify(content, str, options, resolve)
  })
}
