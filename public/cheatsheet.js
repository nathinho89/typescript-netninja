"use strict";
/*
To initialise the config, type "tsc --init" into the terminal
Be sure to edit the rootDir, outDir
Add an include rule with the correct location at the end of the json config file:
    "include": ["src"]
Full documentation: https://www.typescriptlang.org/docs/
*/
// Explicit types
var character;
var age;
var isLoggedIn;
// With default values
var characterDef = 'ninja';
var ageDef = 32;
var isLoggedInDef = false;
// Arrays
var ninjas = [];
var ninjasNum = [];
// Union Types (mixed data)
var ninjasMix = [];
var uid;
// Objects just declaring type
var ninjaOne;
ninjaOne = {
    name: 'Nathan',
    age: 32,
    blackBelt: true
};
// Objects with pre defined type setting
var ninjaTwo;
ninjaTwo = {
    name: 'Nathan',
    age: 32,
    blackBelt: true
};
// Any type - could be a string, number, bool, array or object - reverts back to native JS with loose var
var anyVar;
var anyArr = [];
var anyObj;
// Functions 
var circ = function (diameter) {
    return diameter * Math.PI;
};
var add = function (a, b, c, type) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    // You can declare what type of data the function will infer by typing the type before the arrow, but typescript will do this automatically
    // If void is returned this means that no return is outputted from the function
    if (type) {
        console.log(type);
    }
    // The ? after the parameter declaration means it's not required, and the pipe bracket declares it can be a number or a string
    return c ? a + b + c : a + b;
};
var nameStr = 'Nathan';
var greet = function (user) {
    console.log(user);
};
// Function Signatures - ensures the function has to match
// Example 1
var greetSig;
greetSig = function (name, greeting) {
    console.log(greeting + " " + name);
};
// Example 2
var calc;
calc = function (first, second, action) {
    switch (action) {
        case 'add':
            return first + second;
        case 'subtract':
            return first - second;
        case 'multiply':
            return first * second;
        default:
            return 'No action supplied';
    }
};
var outcome = calc(10, 20);
console.log(outcome);
// Example 3
var logDetails;
logDetails = function (ninja) {
    console.log("Ninja is called " + name + " and is " + age + " years old");
};
