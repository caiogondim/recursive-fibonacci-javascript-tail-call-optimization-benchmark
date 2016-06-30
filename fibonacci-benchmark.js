'use strict'

// Reference: http://benignbemine.github.io/2015/07/19/es6-tail-calls/

const debug = require('logdown')()
const Benchmark = require('benchmark')

//
// Fibonacci algorithm definitions
//

function fibRecursive(n) {
  if (n <= 1){
    return n;
  } else {
    return fibRecursive(n-1) + fibRecursive(n - 2);
  }
}

function fibRecursiveWithTco(n) {
  function fibIterRecursive(n, a, b){
    if (n === 0) {
      return b;
    } else {
      return fibIterRecursive(n-1, a + b, a);
    }
  };

  return fibIterRecursive(n, 1, 0);
}

function fibIterative(n) {
  var a = 1, b = 0, temp

  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

//
// Benchmark
//

const fibonacciSequence = [8, 13, 21, 34, 55]
const benchmarkSuite = new Benchmark.Suite()

var algorithms = [
  {
    name: 'recursive',
    func: fibRecursive
  },
  {
    name: 'recursive with TCO',
    func: fibRecursiveWithTco
  },
  {
    name: 'iterative',
    func: fibIterative
  }
]

algorithms.forEach(algorithm => {
  fibonacciSequence.forEach(n => {
    benchmarkSuite.add(`${algorithm.name} for ${n}`, () => {
      algorithm.func(n)
    })
  })
})

benchmarkSuite
  .on('cycle', event => {
    debug.log(String(event.target))
  })
  .run({
    maxTime: 60
  })
