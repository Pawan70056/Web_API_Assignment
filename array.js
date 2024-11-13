// Define an array
const numbers = [1, 2, 3, 4, 5];

// Adding items to the end of the array
numbers.push(6);
console.log("After push:", numbers); 

// Removing the last item
numbers.pop();
console.log("After pop:", numbers); 

// Adding items to the beginning of the array
numbers.unshift(0);
console.log("After unshift:", numbers); 

// Removing the first item
numbers.shift();
console.log("After shift:", numbers);

// Slicing the array (creating a new array with elements from index 1 to 3)
const sliced = numbers.slice(1, 4);
console.log("Slice:", sliced); 

// Splicing the array (removing and/or adding items at index 2)
numbers.splice(2, 1, 9); 
console.log("After splice:", numbers); 

// Concatenating arrays
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log("Concat:", combined); 

// Finding index of an element
console.log("Index of 4:", numbers.indexOf(4)); 

// Checking if array includes a value
console.log("Includes 9:", numbers.includes(9)); 

// Filtering the array
const filtered = numbers.filter(num => num > 3);
console.log("Filter (greater than 3):", filtered); 

// Mapping to a new array (multiplying each item by 2)
const doubled = numbers.map(num => num * 2);
console.log("Map (doubled):", doubled); 

// Sorting the array
numbers.sort((a, b) => b - a);
console.log("Sorted descending:", numbers); 

// Reversing the array
numbers.reverse();
console.log("Reversed:", numbers); 

// Splitting and joining (works on strings, not arrays)
const str = "Hello,world";
const splitStr = str.split(",");
console.log("Split:", splitStr); 
console.log("Join:", splitStr.join(" ")); 

// Reducing the array (summing the values)
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Reduce (sum):", sum); 
