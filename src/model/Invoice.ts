import { HasFormatter } from '../interfaces/HasFormatter.js'

// Classes and access modifiers
export class Invoice implements HasFormatter { 
    // public can be accessed regardless
    // readonly can be read but not changed
    // private can only be accessed within the class
    // protected can only be accessed within the class and by instances of it's sub / child

    // Shorthand for assigning vars and access variables
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() { // method used to output the private property
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}