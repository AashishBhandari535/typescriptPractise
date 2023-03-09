"use strict";
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//arrays
let ninjas = [];
ninjas.push('shaun');
//union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
let uid;
uid = '123';
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
console.log(ninjaOne);
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' };
let age = 25;
age = "true";
console.log(age);
age = "hello";
console.log(age);
age = { name: 'luigi' };
console.log(age);
let mixed1 = [];
mixed1.push(5);
mixed1.push('mario');
mixed1.push(false);
console.log(mixed);
let ninja;
ninja = { name: 'yoshi', age: '23' };
console.log(ninja);
let greet;
greet = () => {
    console.log('hello,again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 6);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet1 = (user) => {
    console.log(`${user.name} says hello`);
};
//   function signatures
let greet2;
// example 1
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails1;
logDetails1 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
