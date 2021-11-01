import { HasFormatter } from '../interfaces/HasFormatter.js'

// Classes and access modifiers
export class Payment implements HasFormatter { 
    // Shorthand for assigning vars and access variables
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format() { // method used to output the private property
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}