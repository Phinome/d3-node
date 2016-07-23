// mocha test/basic -R List
/* global describe, it */

const assert = require('assert')
const D3Node = require('./../index')
const d3 = D3Node.d3

describe('Using d3 functions', function () {
  var d3n = new D3Node()
  var document = d3n.document

  d3.select(document.body).append('span')

  it('should have correct max', function () {
    var maxNum = d3.max([1, 2, 4])
    assert.equal(maxNum, 4)
  })

  it('should not have svg tag', function () {
    var svg = d3n.svgString()
    assert.equal(svg, '')
  })
})

describe('d3.version', function () {
  it('should be 3.x', function () {
    assert.equal(d3.version.split('.')[0], '3')
  })
})