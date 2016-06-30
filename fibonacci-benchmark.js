'use strict'

// Reference: http://benignbemine.github.io/2015/07/19/es6-tail-calls/

const debug = require('logdown')()

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
  var a = 1, b = 0, temp;

  while (n > 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

//
// View
//

const ns = [8, 13, 21, 34]
// const ns = [8, 13, 21, 34, 55, 89]

ns.forEach((n, index) => {
  debug.info('Fibonacci for n =', n)

  console.time('fibRecursive')
  fibRecursive(n)
  console.timeEnd('fibRecursive')

  console.time('fibRecursiveWithTco')
  fibRecursiveWithTco(n)
  console.timeEnd('fibRecursiveWithTco')

  console.time('fibIterative')
  fibIterative(n)
  console.timeEnd('fibIterative')

  console.log('\n')
})
