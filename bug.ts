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