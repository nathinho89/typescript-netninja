// Classes and access modifiers
export class Invoice {
    // public can be accessed regardless
    // readonly can be read but not changed
    // private can only be accessed within the class
    // protected can only be accessed within the class and by instances of it's sub / child
    // Shorthand for assigning vars and access variables
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
