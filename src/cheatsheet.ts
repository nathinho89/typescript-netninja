import { Invoice } from './model/Invoice.js';
import { Payment } from './model/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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

// DOM & Typecasting
const anchorCS = document.querySelector('a')!; // By adding an ! to the end of the querySelector it tells TS that it will always be present in the DOM
console.log(anchorCS.href);

const formCS = document.querySelector('.new-item-form') as HTMLFormElement; // Typecasts the element to be a form so they are available in VS code
console.log(formCS.children);

// Inputs
const typeCS = document.querySelector('#type') as HTMLSelectElement;
const toFromCS = document.querySelector('#tofrom') as HTMLInputElement;
const detailsCS = document.querySelector('#details') as HTMLInputElement;
const amountCS = document.querySelector('#amount') as HTMLInputElement;

// Event listeners
formCS.addEventListener('submit', (e: Event) => { // Sets the param type as Event
    e.preventDefault();

    console.log(
        typeCS.value,
        toFromCS.value,
        detailsCS.value,
        amountCS.valueAsNumber // Setting the value as number
    )
});

// Classes and access modifiers
class Person { 
    // public can be accessed regardless
    // readonly can be read but not changed
    // private can only be accessed within the class
    // protected can only be accessed within the class and by instances of it's sub / child

    /* 
    private name: string; // can prepend the access type (public, private, protected, readonly), public by default
    private role: string;
    private age: number;

    constructor(n: string, r: string, a: a) {
        this.name = n;
        this.role = r;
        this.age = a;
    }
    */

    // Shorthand for assigning vars and access variables
    constructor(
        readonly name: string,
        private role: string,
        public age: number
    ){}

    format() { // method used to output the private property
        return `${this.name} is ${this.age} years old and is a ${this.role}`;
    }
}

const personOne = new Person('Mario', 'Plumber', 25);
const personTwo = new Person('Luigi', 'Engineer', 32);

let people: Person[] = []; // Only invoice objects can be added to array
people.push(personOne, personTwo);

people.forEach(person => {
    console.log(
        person.format()
    )
});

// Interfaces
interface IsPerson {
    name: string;
    age: number;

    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Nathan',
    age: 32,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
} 

greetPerson(me);

// Interfaces with Classes
let docOne: HasFormatter;
let docTwo: HasFormatter;

// By declaring the two vars to have the HasFormatter interface, it will validate that each Class contains it
docOne = new Invoice('Yoshi', 'Web work', 2500);
docTwo = new Payment('Mario', 'App work', 4000);

// Again by declaring the HasFormatter interface, we validate that each object passed into the array has the interface method
// let docs = HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// Generics (re-usable for any object)
// Can be any letter but most use <T>, and this allow us to access the properties after the generic has ran (capturing specifics of that type)
// If just using a <T> this can accept any type of data, else we can declare what data it expects by using extends
const addUID = <T extends object>(item: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...item, uid};
}

let genOne = addUID({name: 'Yoshi', age: 40});

// Can also declare that the data passed in has to have a name property
const addUIDName = <T extends { name: string }>(item: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...item, uid};
}

// Generics with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string,
    data: T;
}

// Declares the type of data it's expecting
const newDoc: Resource<string> = {
    uid: 123,
    resourceName: 'New Doc',
    data: 'Nathan'
}

// Expecting an array of strings
const docArr: Resource<string[]> = {
    uid: 2,
    resourceName: 'Shopping List',
    data: ['bread', 'milk', 'toilet roll']
}

// ENUMS
// Maps out to 0, 1, 2, 3, 4 in the console
enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, ACTOR
}

interface Material<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const matOne: Material<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Name of the wind' }
}
const matTwo: Material<object> = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'Joe Bloggs' }
}

// Tuples
// Are non flexible arrays, so each position is fixed to that type of data
// Array example (flexible):
let arr = ['Ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';

// Tuple example
let tup: [string, number, boolean] = ['Ryu', 25, true];

let student: [string, number];
student = ['Blanka', 22409];