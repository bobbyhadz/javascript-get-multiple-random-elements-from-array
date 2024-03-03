// EXAMPLE 1 - Get Multiple Random Elements from an Array in JavaScript

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const arr = ['b', 'c', 'a', 'd'];
console.log(getMultipleRandom(arr, 2)); // 👉️ ['a', 'c'];
console.log(getMultipleRandom(arr, 3)); // 👉️ ['c', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get Multiple Random Elements from an Array using `lodash`

// import _ from 'lodash';

// const arr = ['bobby', 'hadz', '.', 'com'];

// console.log(_.sampleSize(arr, 2)); // 👉️ [ 'bobby', 'com' ]
// console.log(_.sampleSize(arr, 2)); // 👉️ [ 'com', '.' ]

// console.log(_.sampleSize(arr, 3)); // 👉️ [ 'hadz', 'bobby', '.' ]
// console.log(_.sampleSize(arr, 3)); // 👉️ [ 'com', 'bobby', '.' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get a random Element from an Array in JavaScript

// function getRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// const arr = ['bobby', 'hadz', 'com'];

// console.log(getRandomElement(arr)); // 👉️ hadz
// console.log(getRandomElement(arr)); // 👉️ com
// console.log(getRandomElement(arr)); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get a random element from an array using `lodash`

// import _ from 'lodash';

// const arr = ['bobby', 'hadz', 'com'];

// console.log(_.sample(arr)); // 👉️ bobby
// console.log(_.sample(arr)); // 👉️ com
// console.log(_.sample(arr)); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get a random element from an array using Bitwise NOT (~)

// function getRandomElement(arr) {
//   return arr[~~(Math.random() * arr.length)];
// }

// const arr = ['bobby', 'hadz', 'com'];

// console.log(getRandomElement(arr)); // 👉️ hadz
// console.log(getRandomElement(arr)); // 👉️ com
// console.log(getRandomElement(arr)); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get a Random Property from an Object in JavaScript

// const obj = {
//   name: 'bobby hadz',
//   country: 'Chile',
//   age: 30,
// };

// function getRandomProperty(obj) {
//   const keys = Object.keys(obj);

//   return keys[Math.floor(Math.random() * keys.length)];
// }

// console.log(getRandomProperty(obj)); // 👉️ name
// console.log(getRandomProperty(obj)); // 👉️ age
// console.log(getRandomProperty(obj)); // 👉️ name

// console.log(obj[getRandomProperty(obj)]); // 👉️ bobby hadz

// ------------------------------------------------------------------

// // EXAMPLE 7 - Get a Random Property from an Object using `lodash`

// import _ from 'lodash';

// const obj = {
//   name: 'bobby hadz',
//   country: 'Chile',
//   age: 30,
// };

// const keys = Object.keys(obj);

// console.log(_.sample(keys)); // 👉️ name
// console.log(_.sample(keys)); // 👉️ name
// console.log(_.sample(keys)); // 👉️ country

// ------------------------------------------------------------------

// // EXAMPLE 8 - Get multiple random properties from an object

// import _ from 'lodash';

// const obj = {
//   name: 'bobby hadz',
//   country: 'Chile',
//   age: 30,
// };

// const keys = Object.keys(obj);

// console.log(_.sampleSize(keys, 2)); // 👉️ [ 'name', 'country' ]
// console.log(_.sampleSize(keys, 2)); // 👉️ [ 'age', 'country' ]
// console.log(_.sampleSize(keys, 2)); // 👉️ [ 'age', 'country' ]
