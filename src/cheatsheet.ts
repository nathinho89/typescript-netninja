/* 
To initialise the config, type "tsc --init" into the terminal 
Be sure to edit the rootDir, outDir
Add an include rule with the correct location at the end of the json config file:
    "include": ["src"]
Full documentation: https://www.typescriptlang.org/docs/
*/

// Explicit types
    let character: string;
    let age: number;
    let isLoggedIn: boolean;

// With default values
    let characterDef: string = 'ninja';
    let ageDef: number = 32;
    let isLoggedInDef: boolean = false;

// Arrays
    let ninjas: string[] = [];
    let ninjasNum: number[] = [];

// Union Types (mixed data)
    let ninjasMix: (string|number)[] = [];
    let uid: string|number;

// Objects just declaring type
    let ninjaOne: object;
    ninjaOne = {
        name: 'Nathan', 
        age: 32,
        blackBelt: true
    }

// Objects with pre defined type setting
    let ninjaTwo: {
        name: string,
        age: number,
        blackBelt: boolean
    }
    ninjaTwo = {
        name: 'Nathan', 
        age: 32,
        blackBelt: true
    }

// Any type - could be a string, number, bool, array or object - reverts back to native JS with loose var
    let anyVar: any;
    let anyArr: any[] = [];
    let anyObj: { name: any, age: any }

// Functions 
    const circ = (diameter: number) => {
        return diameter * Math.PI;
    }

    const add = (a: number = 0, b: number = 0, c?: number, type?: string | boolean): number => {
        // You can declare what type of data the function will infer by typing the type before the arrow, but typescript will do this automatically
        // If void is returned this means that no return is outputted from the function
        if(type) {
            console.log(type);
        }
        // The ? after the parameter declaration means it's not required, and the pipe bracket declares it can be a number or a string
        return c ? a + b + c : a + b;
    }

// Type Aliases
    type StrNum = string | number;
    let nameStr: StrNum = 'Nathan';

    type objWithName = { name: string, uid: StrNum };
    const greet = (user: objWithName) => {
        console.log(user);
    }

// Function Signatures - ensures the function has to match
    // Example 1
    let greetSig: (a: string, b: string) => void;
    greetSig = (name: string, greeting: string) => {
    console.log(`${greeting} ${name}`);
    }

    // Example 2
    let calc: (a: number, b: number, c?: string) => number | string;
    calc = (first: number, second: number, action?: string) => {
        switch(action) {
            case 'add':
                return first + second;
            case 'subtract':
                return first - second;
            case 'multiply':
                return first * second;
            default :
                return 'No action supplied';
        }
    }

    const outcome = calc(10, 20);
    console.log(outcome);

    // Example 3
    let logDetails: (obj: {name: string, age: number}) => void;

    type ninjaObj = { name: string, age: number }
    
    logDetails = (ninja: ninjaObj) => {
        console.log(`Ninja is called ${name} and is ${age} years old`)
    }