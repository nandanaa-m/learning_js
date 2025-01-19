"use strict";  //treats all code in file as newer version of js

//alert(3+3) //we are using node js, not browser

console.log(3     //this works, but code readability should be high, so dont write like this
    + 3
)
console.log(3+3)
console.log("Nandana")

let name = "Nandana" 
let age = 18
let isloggedin = false

//IMP DATATYPES IN JS

//number -> 2^53
// bigint
//string -> " "
//boolean -> true/false
// null - standalone value
// undefined - no value assigned
/* the difference btwn null and undefined is that null can be assigned as a value, but undefined means NO VALUE HAS BEEN ASSIGNED */
//symbol -> unique

//object 

console.log(typeof "Hello") //returns datatype
console.log(typeof age) 
console.log(typeof null) //ans: object
console.log(typeof undefined) //ans: undefined