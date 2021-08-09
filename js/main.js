// Basics of JavaScript

/* 
    Multiline Comment Syntax
    -- Variable Declaration in JS --
    Primitive Types: Srings, Integers, Floats, Boolean, Arrays, Objects (aka dictionaries)
    Functions in JS
    Looping/Conditional Statements in JS
*/

// String Variable
var name_1 = 'Joel' // let name_1 or const name_1
console.log(name_1)


// difference between var, const, let -- MOSTLY scope
 /*
    var keyword is used to instantiate a global variable anywhere on the page
    let keyword is used to instantiate block bound variable inside an object, loop, function, etc
    const is exactly the same as let, but does not allow the value stored to change 
 */
let name_2 = 'Coding Temple'
name_2 = 'Nate W'
console.log(name_2)


// VS
// let name_2 = 'Coding Temple'
// name_2 = 'Nate W'
// console.log(name_2)

//Integer variable
let some_number = 80;

console.log(some_number)

// Float variable

let some_float = 3.14;

console.log(some_float)

//Array Variable
let some_array = [1,2,3,4,5];
console.log(some_array)

// Object Variable

var some_object = { 'test': 'Here is our first object!'}
console.log(some_object)


// JS HOISTING example
console.log(some_new_string)
var some_new_string = 'This is a new string';
console.log(some_new_string)

// var first_name;
// var last_name;
// console.log(first_name)
// first_name = 'Nate';
// last_name = 'Welter';
// console.log(first_name)
// console.log(last_name)

// A better way of declaring a variable
let new_string = '1234CodingTemple';
const other_string = 'CodingIsFun';

/*
    Basic Math Operations
*/

//Addition
let sum = 5 + 5; // incrementation +=5
console.log(sum)

console.log(5+5)

// Subtraction
let diff = 10 - 5; //decrementation -=5
console.log(diff)

// Multiplication
let prod = 5*5; // increment *=5
console.log(prod)

// Division
let div = 5 / 5; // decrement /=5
console.log(div)

// Exponential
let square = 5**2; // increment **=2
console.log(square)


// Ceiling and Floor
let find_ceil = Math.ceil(25.8)
console.log(find_ceil)

let find_floor = Math.floor(25.8)
console.log(find_floor)

// Modulo (remainder) same as Python
console.log(10%2)

// Mind Bender #1
let this_var = some_float + '4'; // 42, Error, undefined, 7.14
console.log(this_var)

// Mind Bender #2
let another_var = some_float + parseFloat('4');
console.log(another_var)



// Variable redeclaration using let
let nfl_goat = 'Tom Brady';
console.log(nfl_goat)

nfl_goat = 'Peyton Manning';
console.log(nfl_goat)

//BAD redeclaration - will cause Syntax Error
// let nfl_goat = 'Eli Manning';
// console.log(nfl_goat)

/*
    ==== JAVASCRIPT FUNCTIONS ====
*/

// Regular named function (no parameters)
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

// calling the function
console.log(addNums())


// function with 2 params
function addNums2(num, num2){
    return num + num2
};

console.log(addNums2(10, 12))

// defining function as a variable
let addNums3 = function(num, num2){
    return num + num2
}

console.log(addNums3(4,4))


// ES6+ Arrow function syntax - no params
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;
    return num*num2
};

console.log(multiplyNums())

/* 
    ES6 Syntax with params 
    SINGLE PARAMETER - does not need parentheses around it - multiple params does need parentheses
*/

let cubed = (num) => {
    return num ** 3
};

let cubed2 = num => {
    return num ** 3
};

console.log(cubed(3))
console.log(cubed2(3))


let doubleNum = (num1, num2) => {
    return (num1*2) + (num2 * 2)
};

console.log(doubleNum(10,2));

// JS Closure
// Self-Invoking Function

console.log((function(name){
    let hello = 'Hello World '+ name;
    return hello
})('Nate'))



// JavaScript Control
//If (conditional) Statements

let determineAge = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
};
console.log(determineAge(50))


// OR keyword ||

let determineAge2 = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 || age <= 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
};
console.log(determineAge(50))

// Ternary Operators
// syntax:
// condition ? <value to return> : <another condition (else if)> ? <next value to return>: <else block value>

let determineAge3 = (age) => {
    return ( age < 18)? 'Minor': (age >= 18 && age <= 65) ? 'Adult': 'Senior'
}

console.log(determineAge3(50))


// For Loop in JavaScript
// For Loop syntax -- for (keyword)(counter; condition; incremeneter/decrementer)

let countByOne = () =>{
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'The counting has stopped'
}

console.log(countByOne())

// decrementation for loop
let decreaseByOne = () =>{
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'The counting has stopped'
}

console.log(decreaseByOne())

// While Loop - Javascript

let countWithWhile = () =>{
    let i = 0; // Counter
    let text = '';

    while(i < 10){
        text += `This number is... ${i} \n` 
        i++
    }
    return text
}
console.log(countWithWhile())

// Do-While loop in JS
let countWithDoWhile = () => {
    let i = 8;// Counter
    let text = '';

    // Do
    do{
        text += `This number is... ${i} \n`
        i++
    }
    while(i < 10)
    return text
}
console.log(countWithDoWhile())


/* 
    JS Arrays: Looping, methods, Array String Methods
*/

// Create a new array group_of_names
let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']

// Grab a value by index
console.log(group_of_names[0]) // Terry


// Deconstruction of an array
var terry, ben, ash;
[terry, ben, ash] = group_of_names
// terry = group_of_names[0]
// ben = group_of_names[1]
// ash = group_of_names[2]
console.log(terry,ben,ash)

// Method #1 - most common for looping through Arrays
let showNames = () => {
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'Done with list'
};

console.log(showNames())

// Method #2 for looping (forEach())
group_of_names.forEach(
    num => console.log(num)
);

// JS Array Method: Array.toString()
console.log(group_of_names.toString())
// typecheck
console.log(typeof(group_of_names.toString()))

// JAVASCRIPT ARRAY METHODS: .map(), .filter(), .reduce()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    }else{
        return 'not B name'
    }
});

console.log(b_names)

// Long form of .map()
let b_names_2 = () => {
    let new_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            new_array.push(group_of_names[i])
        }
    }
    return new_array
};

console.log(b_names_2())

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduce = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
});

// long version
let counter = 0;
for(let i = 0; i < nums.length; i++){
    counter += nums[i]
}
console.log(counter)

// .filter()
let b_names_3 = group_of_names.filter( element => element[0] == 'B');

console.log(b_names_3)

// Array methods with sting values: .join(), .slice(), .search(), .splice()
console.log(group_of_names.join(", "))

console.log(group_of_names.slice(0,3)) // group_of_names[0:3]

// .splice()
let captured_val = group_of_names.splice(0, 1, 'Freddie')
console.log(`This value was removed from the list ${captured_val}`)
console.log(group_of_names)


// HW #2

let replaceGoku = (a_list) => {
    for(let i = 0; i < a_list.length; i++){
        if(i % 2 == 0){
            a_list.splice(i,1, 'Goku')
        }
    }
    return a_list
}

console.log(replaceGoku(group_of_names))

// Using .search() and .slice() on array values that are strings
console.log(group_of_names[0].search('G')) // index = 0

// String.slice()
console.log(group_of_names[1].slice(0)) // defaults to start = 0, stop = last index

// codewars.com

function generateRange(min, max, step){
    let new_list = [];
    for(i = min; i < max+1; i+=step){
      new_list.push(i)
    }
    return new_list
  }

// codewars

function generateRange(min, max, step){
    let new_list = [];
    for(i = min; i < max+1; i+=step){
      new_list.push(i)
    }
    return new_list
  }