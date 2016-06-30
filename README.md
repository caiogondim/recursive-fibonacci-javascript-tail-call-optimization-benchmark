# Studies about tail call optimization (TCO) in JavaScript

To run a JS file with TCO enabled on Node.js you have to run with `--harmony_tailcalls` flag.

```
node --harmony_tailcalls name-of-file.js
```

## Max call stack size

### Learnings
- The call stack in JavaScript is finite.
- It's maximum size is not hard coded and gets smaller if more memory is allocated.

### Test
The below script calls functions recursively with no base case (there is no stop condition for the recursion) to test how the max call stack size behaves when called with functions
with more and less memory footprint.

```
node max-call-stack-size
```

<img
  src="https://raw.githubusercontent.com/caiogondim/studies-about-tail-call-optimization-in-javascript/master/img/stack-size-output.png"
  alt="stack-size-output.png"
/>

## Benchmark on recursive fibonacci with and without TCO

```
node benchmark-fibonacci-with-without-tco
```

## Test

## Results

## Learnings
