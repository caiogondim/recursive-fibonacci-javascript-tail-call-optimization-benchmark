# Studies about tail call optimization (TCO) in JavaScript

## Max call stack size

### Learnings
- The call stack in JavaScript is finite.
- It's maximum size is not hard coded and gets smaller if more memory is allocated.

### Test
The below script calls functions recursively with no base case (there is no stop condition for the recursion) to test how the max call stack size behaves when called with functions
with more and less memory footprint.

```
node stack-size
```

<img src"img/stack-size-output.png" />
