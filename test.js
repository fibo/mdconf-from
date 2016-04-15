var test = require('tape')

test('usage', (t) => {
  t.plan(1)

  var config = require('./index.js')('README.md')

  t.equal(config.foo, 'bar')
})
