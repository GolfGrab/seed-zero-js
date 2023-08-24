// ###################################################################################

// task 1 - data types
// declare 4 variables with some values and print out the data types of the variables
// example:
// const name = "John"
// console.log(typeof name) // string

// expected output:
// string
// number
// boolean
// object

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 2 - function
// create a function that takes in 2 numbers and returns the sum of the 2 numbers

// expected output:
// function(1, 2)
// 3

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 3 - array
// create an array of 5 numbers and print out the array
// then print out the length of the array

// expected output:
// [1, 2, 3, 4, 5]
// 5

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 4 - object
// create an object with 3 key value pairs
// print out the object keys with console.log(Object.keys(object))
// print out the object values with console.log(Object.values(object))
// then print out the object with console.log(object)

// expected output:
// [ "name", "age", "isMale" ]
// [ "John", 20, true ]
// { name: "John", age: 20, isMale: true }

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 5 - if else
// create a function that takes in a number
// if the number is greater than 10, print out "greater than 10"
// else if the number is less than 10, print out "less than 10"
// else print out "equal to 10"

// expected output:
// func(11) 
// greater than 10
// func(9)
// less than 10
// func(10)
// equal to 10

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 6 - loop
// create a function that takes in a number
// print out the numbers from 0 to the number
// example:
// func(5)
// 0
// 1
// 2
// 3
// 4
// 5

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 7 - loop array
// create an array of 5 strings
// print out the array using loop
// example:
// [ "John", "Jane", "Jack", "Jill", "Joe" ]
// John
// Jane
// Jack
// Jill
// Joe

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 8 - loop object
// create two arrays, one for the keys and one for the values
// use the two arrays to create an array of objects with loop
// print out the array of objects

// expected output:
// [
//   { name: 'John' },
//   { age: 20 },
//   { isMale: true },
//   { hobby: 'football' },
//   { address: '123 Main Street' }
// ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 9 - function as parameter and callback
// create a function that takes in 2 numbers do some math and return the result
// create another callback function to print out the result

// expected output:
// the sum of 5 and 10 is 15


// ------------------------------------------------------------------------------------

/* initial code do not modify */
// const a = 5
// const b = 10

// function doMath(input1, input2, mathFunction,callback) {
//   const result = mathFunction(input1, input2)
//   callback(result)
// }

/* code here */

// doMath(a, b, , /* modify this line */)

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 10 - object destructuring
// create an object with 3 key value pairs
// create function that takes in an object and print out the values
// use object destructuring to print out the values
// example:

// John
// 20
// true

// ------------------------------------------------------------------------------------

/* initial code do not modify */
// const obj = { name: "John", age: 20, isMale: true }

/* code here */

/* initial code do not modify */
// printObj(obj)
// ------------------------------------------------------------------------------------

// ###################################################################################

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //                    
//                              Array Methods Exercises                             //
//                                                                                  //                    
//////////////////////////////////////////////////////////////////////////////////////

// ###################################################################################

// task 1 - map
// create an array of 5 numbers
// use map to create a new array with each number multiplied by 2
// print out the new array

// expected output:
// [ 2, 4, 6, 8, 10 ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 2 - filter
// create an array of 5 numbers
// use filter to create a new array with numbers greater than 3
// print out the new array

// expected output:
// [ 4, 5 ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //                    
//                              Optional Exercises                                  //
//                                                                                  //                    
//////////////////////////////////////////////////////////////////////////////////////

// ###################################################################################

// task 3 - reduce
// create an array of 5 numbers
// use reduce to get the sum of the numbers
// print out the sum

// expected output:
// 15

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 4 - sort
// create an array of 5 numbers [5, 3, 1, 4, 2]
// use sort to sort the numbers in ascending order (smallest to largest)
// print out the sorted array
// then use sort to sort the numbers in descending order (largest to smallest)
// print out the sorted array

// expected output:
// [ 1, 2, 3, 4, 5 ]
// [ 5, 4, 3, 2, 1 ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 5 - find
// create an array of 5 objects 
// use find to find the object with the name "John"
// print out the object

// expected output:
// { name: "John", age: 20, isMale: true }

// ------------------------------------------------------------------------------------

/* initial code do not modify */
// const arr = [
//   { name: "Jane", age: 21, isMale: false },
//   { name: "Jack", age: 22, isMale: true },
//   { name: "John", age: 20, isMale: true },
//   { name: "Jill", age: 23, isMale: false },
//   { name: "Joe", age: 24, isMale: true }
// ]

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 6 - findIndex

// create an array of 5 objects
// use findIndex to find the index of the object with the name "John"
// print out the index

// expected output:
// 2

// ------------------------------------------------------------------------------------

/* initial code do not modify */
// const arr = [
//   { name: "Jane", age: 21, isMale: false },
//   { name: "Jack", age: 22, isMale: true },
//   { name: "John", age: 20, isMale: true },
//   { name: "Jill", age: 23, isMale: false },
//   { name: "Joe", age: 24, isMale: true }
// ]

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 7 - every and some
// create 3 array of 5 numbers [1, 2, 3, 4, -1] and [-1, -2, -3, -4, -5] and [1, 2, 3, 4, 5]
// use every to check if all the numbers are greater than 0
// print out the result
// use some to check if some of the numbers are greater than 0
// print out the result

// expected output:
// all numbers in [1, 2, 3, 4, -1] are greater than 0: false
// all numbers in [-1, -2, -3, -4, -5] are greater than 0: false
// all numbers in [1, 2, 3, 4, 5] are greater than 0: true
// some numbers in [1, 2, 3, 4, -1] are greater than 0: true
// some numbers in [-1, -2, -3, -4, -5] are greater than 0: false
// some numbers in [1, 2, 3, 4, 5] are greater than 0: true

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 8 - includes
// create an array of 5 numbers [1, 2, 3, 4, 5]
// create a function that takes in a number and check if the array includes the number
// print out the result

// expected output:
// [1, 2, 3, 4, 5] includes 3: true
// [1, 2, 3, 4, 5] includes 6: false

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################
// task 9 - slice
// create an array of 5 numbers [1, 2, 3, 4, 5]
// use slice to create a new array with the first 3 numbers
// print out the new array

// expected output:
// [ 1, 2, 3 ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 10 - array destructuring
// create an array of 5 numbers [1, 2, 3, 4, 5]
// use array destructuring to create 5 variables with the values of the array
// print out the variables

// expected output:
// 1
// 2
// 3
// 4
// 5

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 11 - spread operator
// create an array of 5 numbers [1, 2, 3, 4, 5]
// create another array of 5 numbers [6, 7, 8, 9, 10]
// use spread operator to create a new array with the numbers from the 2 arrays
// print out the new array

// expected output:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// ------------------------------------------------------------------------------------

/* code here */

// ------------------------------------------------------------------------------------

// ###################################################################################

// task 12 - rest operator
// create a function that takes in 2 numbers and rest operator
// use rest operator to create an array with the rest of the numbers
// print out the first 2 numbers and the rest of the numbers

// expected output:
// 1
// 2
// [ 3, 4, 5 ]

// ------------------------------------------------------------------------------------

/* initial code do not modify */
// const a = 1
// const b = 2
// const c = 3
// const d = 4
// const e = 5

// function restFunc(/* modify this line */) {

/* code here */

// }

/* initial code do not modify */
// restFunc(a, b, c, d, e)

// ------------------------------------------------------------------------------------

// ###################################################################################