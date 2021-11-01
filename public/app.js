import { Invoice } from './model/Invoice.js';
import { Payment } from './model/Payment.js';
import { ListTemplate } from './model/ListTemplate.js';
const invOne = new Invoice('Mario', 'Work on the project', 1000);
const invTwo = new Invoice('Luigi', 'Additions on the project', 500);
let invoices = []; // Only invoice objects can be added to array
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
const anchor = document.querySelector('a'); // By adding an ! to the end of the querySelector it tells TS that it will always be present in the DOM
console.log(anchor.href);
// Form
const form = document.querySelector('.new-item-form'); // Typecasts the element to be a form so they are available in VS code
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Event listeners
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [toFrom.value, details.value, amount.valueAsNumber]; // Using a tuple to pass the spread operator validation
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    toFrom.value = '';
    details.value = '';
    amount.value = '';
});
