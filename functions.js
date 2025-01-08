

/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block

 Space Complexity: during execution of a program, total memory used by program in RAM is called space complexity
 Types:
    1. Data Space       : memory used to store variabels and constants of a program is called data space 
    2. Instruction space: memory used to store program statements
    3. Environment Space: memory used to store arguments and return return values during calling a function

 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability

Note1: a function can't access variables defined in other function
       directly to do so we have to use concept of arguments and
       return value
Note2: a function can access variables defines in global scope
       and vice versa not true
    

 * Types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter


syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
        return value //optional
    }
    functionName(arguments)

Note : parameters, argumnets and return values are optional and can be used
       when required
    */


//sample function
// function test() {
//     console.log("In test function")
// }
// console.log("In main global scope")
// test()
// console.log("Back to global scope")


//function call within function
// function fun1() {
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2() {
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3() {
//     console.log("In fun3 function")
// }
// console.log("In Main Global Scope")
// fun1()
// console.log("Back to Main Global Scope")


// 1. function without return value without parameter
function add(){
    var a = 10
    var b = 20
    var sum = a+b
    console.log(`sum = ${sum}`)
}
function test(){
    add()
}
test()

// function sumDigit() {
//     var num = 12345
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     console.log(`sum = ${sum}`)
// }
// function test() {
//     sumDigit()
// }
// test()


// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function test(){
//     // var s = add()
//     // console.log(`sum = ${s}`)

//     console.log(`sum = ${add()}`)
// }
// test()

// function sumDigit() {
//     var num = 12345
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     return sum
// }
// function test() {
//     var sum = sumDigit()
//     console.log(`sum = ${sum}`)
// }
// test()


// 3. function without return value with parameter
// function add(x,y){      //parameters or formal parameters
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     var a = 10
//     var b = 20
//     add(a,b)        //arguments or actula parameters
// }
// test()

// function sumDigit(num) {
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     console.log(`sum = ${sum}`)
// }
// function test() {
//     sumDigit(12345)
// }
// test()



// 4. function with return value with parameter
// function add(x,y){
//     var sum = x+y
//     return sum
// }
// function test(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)
//     console.log(`sum = ${s}`)
// }
// test()

// function sumDigit(num) {
//     var sum = 0
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }
//     return sum
// }
// function test() {
//     var sum = sumDigit(12345)
//     console.log(`sum = ${sum}`)
// }
// test()

//default parameters
// function test(a = 0, b = 0, c = 0) {
//     console.log(`a = ${a} b = ${b} and c = ${c}`)
// }
// test(10, 20, 30)
// test(10, 20)
// test(10)
// test()


//function returing an Array
// function test(){
//     return [10,20,30,40,50]
// }
// console.log(test())

//regular function or noral functions
// function test(){
//     console.log("In regular function")
// }
// test()

// function add(x,y){
//     return x+y
// }
// console.log(add(10,20))

//anonymous function
// var test = function(){
//     console.log("In anonymous function")
// }
// test()

// var add = function(x,y){
//     return x+y
// }
// console.log(add(10,20))

//arrow function or fat arrow function
// var test = () => console.log("In fat arrow function")
// test()

// var add = (x,y)=>x+y
// console.log(add(10,20))


//Self Involked Functions or Immediately Involked Functions Expression(IIFE)
//Regular Function
// (function test() {
//     console.log("in regular self involked function")
// })()

// (function test(x,y) {
//     console.log(`${x} + ${y} = ${x+y}`)
// })(10,20)

// console.log((function test(x, y) {
//     return x + y
// })(10, 20))

//anonymous Function
// (function() {
//     console.log("in anonymous self involked function")
// })()

// (function(x,y) {
//     console.log(`${x} + ${y} = ${x+y}`)
// })(10,20)

// console.log((function(x, y) {
//     return x + y
// })(10, 20))

//Fat Arrow Function
// (() => console.log("in anonymous self involked function"))()

// ((x,y)=>console.log(`${x} + ${y} = ${x+y}`))(10,20)

// console.log(((x, y)=>x + y)(10, 20))

// Higher Order Functions and Callback Functions
//Higher Order Functions:a function is called higher order function if it takes another function as argument

//Callback Function :   a function is called callback function if it is passed as argument into a higher order function

// function higherOrder(fun){
//     console.log("In higherOrder Function")
//     fun()
//     fun()
//     fun()
//     console.log("Back to higherOrder Function")
// }

// higherOrder(function callback(){
//     console.log("In Callback function")    
// })

// higherOrder(function(){
//     console.log("In Callback function")    
// })

// higherOrder(()=>console.log("In Callback function"))

// function callback(){
//     console.log("In callback function")
// }
// var callback = function(){
//     console.log("In callback function")
// }
// higherOrder(callback)


// var callback = ()=>console.log("In callback function")
// higherOrder(callback)

//storage class
/**
keyword         Type            Life             scope
var             function level  till function    within function
let             block level     till block       within block
const           block level     till block       within block
no keyword      global          all over program all over program
 */

// function test() {
//     if (true) {
//         a = 10          //global variable
//         var b = 20      //function level
//         let c = 30      //block level
//         const d = 40    //block level
//         console.log(`In if block of test function a = ${a} b = ${b} c = ${c} and d = ${d}`)
//     }
//     console.log(`Outside if block of test function a = ${a} b = ${b}`)
// }
// test()
// console.log(`in main global scope a = ${a}`)
// function example(){
//     console.log(`In example function a = ${a}`)
// }
// example()


// function test(){
//     var a = 10
//     {
//         var a = 20 
//         console.log(`inside block a = ${a}`)   
//     }
//     console.log(`outside block a = ${a}`)   
// }
// test()

// function test(){
//     let a = 10
//     {
//         let a = 20 
//         console.log(`inside block a = ${a}`)   
//     }
//     console.log(`outside block a = ${a}`)   
// }
// test()

// function test(){
//     const a = 10
//     a = 20
//     console.log(`outside block a = ${a}`)   
// }
// test()



//Recursion: when function call itself
// var a = 0
// function test(){
//     a++
//     console.log("In test function")
//     if(a<5)
//     test()
//     console.log("Back to test function")
// }
// console.log("In main global scope")
// test()
// console.log("Back to main global scope")

// function test(a){
//     a++
//     console.log("In test function")
//     if(a<5)
//     test(a)
//     console.log("Back to test function")
// }
// console.log("In main global scope")
// test(0)
// console.log("Back to main global scope")

// function fact(num) {
//     if (num <= 1)
//         return 1
//     else
//         return num * fact(num - 1)
// }
// console.log(fact(5))
// functions.js
// Displaying functions.js.