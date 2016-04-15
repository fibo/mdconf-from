var fs = require('fs')
var mdconf = require('mdconf')
function mdconfFrom (file) {
  var content = fs.readFileSync(file, 'utf8')
  var markdownObj = mdconf(content)
  var rootKey = Object.keys(markdownObj)[0]
  var config = markdownObj[rootKey].configuration
  return config
}
module.exports = mdconfFrom
