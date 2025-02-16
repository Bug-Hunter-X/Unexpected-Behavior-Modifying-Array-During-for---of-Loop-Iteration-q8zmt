function printAll(strs: string[]): void {
  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i]);
  }
}

const arr: string[] = ['hello', 'world', 'typescript'];

printAll(arr); //this works fine

// let's try to make it more concise with for...of loop
function printAll2(strs: string[]): void {
  for (const str of strs) {
    console.log(str);
  }
}

printAll2(arr); //this works fine

//now let's do something slightly different
function printAll3(strs: string[]): void {
  for (const str of strs) {
    console.log(str);
    strs.pop(); //removing element from the array while iterating using for of loop
  }
}

printAll3(arr); //this does not work as expected

//Solution 1: Iterate over a copy
function printAll4(strs: string[]): void {
  const strsCopy = [...strs];
  for (const str of strsCopy) {
    console.log(str);
    const index = strs.indexOf(str);
    if (index > -1) {
      strs.splice(index, 1);
    }
  }
}

printAll4(arr);

//Solution 2: Use a for loop with index-based access
function printAll5(strs: string[]): void {
  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i]);
    strs.pop();
  }
}

printAll5(arr); 