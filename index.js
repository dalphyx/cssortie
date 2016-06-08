var path = require('path')
var cssrules = require('./cssrules')

module.exports = [
  [
    '$variable',
    '@atrule',
    '@mixin'
  ],
  cssrules,
  ['...'],
  ['>child']
]
