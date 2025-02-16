# Unexpected Behavior Modifying Array During for...of Loop Iteration in TypeScript

This repository demonstrates an uncommon bug in TypeScript related to modifying an array while iterating over it using a `for...of` loop.  The example showcases how removing elements during iteration can lead to unexpected behavior and incomplete processing.

## Bug Description
The core issue lies in modifying the array's length while the `for...of` loop is iterating.  When an element is removed, the iterator does not adjust accordingly, resulting in some elements being skipped.

## How to Reproduce
1. Clone the repository.
2. Compile and run the `bug.ts` file using a TypeScript compiler (tsc) and a Node.js runtime.
3. Observe the unexpected output of the `printAll3` function compared to the expected behavior of `printAll` and `printAll2`.

## Solution
The solution is to avoid modifying the array during iteration using `for...of`.  Alternative approaches such as iterating over a copy of the array or using a `for` loop with index-based access are provided in `bugSolution.ts`.