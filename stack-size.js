'use strict'

var levels = [];
var labels = [];
var level = 0;

var recurse0 = function () {
  level++
  recurse0()
}

var levelFns = [
  recurse0,

  function recurse1(fn) {
    level++
    fn(fn)
  },

  function recurse2(fn) {
    var a1 = 1
    level++
    fn(fn)
  },

  function recurse3(fn) {
    var a1 = 1
    var a2 = 2
    level++
    fn(fn)
  },

  function recurse4(fn) {
    var a1 = 1
    var a2 = 2
    var a3 = 3
    level++
    fn(fn)
  }
]

for (var i = 0; i < levelFns.length; i++) {
  var fn = levelFns[i]

  try {
    level = 0
    fn(fn)
  } catch (e) {
    levels[i] = level
    labels[i] = '' + i
  }
}

//
// Presentation
//

const Table = require('cli-table')
const table = new Table({
  head: ['# vars', 'max stack size']
})

levels.forEach((level, index) => {
  table.push([index, level])
})

console.log(table.toString())
