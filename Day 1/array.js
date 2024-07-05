const fruits = ["apple", "orange", "banana", "pineapple"];

// to access the lenth of array
let length = fruits.length;
console.log(length); //4

// If you want to push the elememnt into the array - use "Push" method.

fruits.push("grape"); // This will append "grape" to the end of the array.
console.log(fruits); //["apple", "orange", "banana", "pineapple", "grape"]

// If you want to remove the last element from the array - use "pop" method.

// To remove element
fruits.pop(); // This will remove the last element from the array. In this case it is grapes. You can also store the poped element into the variable like this.

let poppedElement = fruits.pop();
console.log(poppedElement); //pineapple
console.log(fruits); //["apple", "orange", "banana", "pineapple"]

// let arr = []; //One way to create an array.
let arr = new Array(); // Writeing new keyword is optional.
arr.push(fruits);
arr.push(fruits.length); //You can Push as many elements as you can.

console.log(arr); //[["apple", "orange", "banana", "pineapple"]]

// If you want to access a specific element from the array - use "[]" notation.
console.log(fruits[0]); //apple

// If you want to change a specific element from the array - use "[]" notation.

fruits[0] = "kiwi";
console.log(fruits); //["kiwi", "orange", "banana", "pineapple"]

// Array Methods in JavaScript.

// Array.From -> This method is used to create a new shallow copy of the existing array. for example->

console.log(Array.from("JavaScript")); //['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't'];

// syntax
// Array.from(array,fun,thisArg);

// parameters
// array - iterable array

// fun - optional. A function to execute for each element. If not provided, default behaviour is to convert each element to a string.

// thisArg - optional. Value to use as this when executing fun.

// Array.isArray -> This method returns true if the given value is an array, and false otherwise.

//2. Array.isArray -> This method returns true if the given value is an array.

console.log(Array.isArray(fruits)); //true
console.log(Array.isArray([])); //true
console.log(Array.isArray("[]")); //false

// accessing value at any random index

// 1. Using the index number directly.
console.log(fruits[2]); //banana
// 2. Using the at method directly.
console.log(fruits.at(2)); //banana
// at method is same as the bracket method.

// 3. Array.concat -> This method is used to concat(merge) two or more array into one array. It does not change the existing array.

let arr1 = ["apple", "orange"];
let arr2 = ["banana", "pineapple"];

let mergedArray = arr1.concat(arr2);
console.log(mergedArray); //["apple", "orange", "banana", "pineapple"]

// Syntax
//1.  concat(arr1, arr2);
// 2. arr1.concat(arr2);

//You can concatinate two arrays of diffrent types
let numbersArray = [1, 2, 3, 4, 5];
let lettersArray = ["a", "b", "c", "d", "e", "f"];

console.log(numbersArray.concat(lettersArray)); // [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f']

// Array.copyWithin -> This method is used to copy a portion of an array to a new location in the same array and/or to fill the remainder of the destination array with a static value.

let arr3 = ["apple", "orange", "banana", "pineapple", "grape"];
// console.log(arr3.copyWithin(2));
console.log(arr3.entries().next().value);

// Filter Method on array;

let int = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let multipleOfTwo = int.filter((int, idx) => int % 3 == 0);
console.log(multipleOfTwo); // [3,6.9,12,15,16,18];

// Filter on array of  objects
const students = [
  { name: "aditya", age: 21, mark: 80 },
  { name: "rator", age: 19, mark: 89 },
  { name: "kevin", age: 22, mark: 38 },
  { name: "atharva", age: 18, mark: 80 },
  { name: "random", age: 25, mark: 80 },
];


const eligible = students.filter((std)=> std.age>20 && std.mark>50);
console.log(eligible); // [ { name: 'aditya', age: 21, mark: 80 }, { name: 'random', age: 25, mark: 80 }]


let flatArray = [1,2,3,4,[[5,6,7],[8,9,10,11]],[12,13,14,[15,16]]];
const flatArray2 = [0, 1, [2, [3, [4, 5]]]];
console.log(flatArray.flat());


//ForEach function 

let numbers = [1, 2, 3, 4, 5];

fruits.forEach((fruit, index) => {
  fruits[index] = fruit.toUpperCase();
});


// Map function 

let num = [1, 2, 3,4,5];
let doubledNumbers = num.map((num) => num * 3);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
