import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/Payment.js';
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi','web work', 250);
// docTwo = new Payment('mario','plumbing work',200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// //classes
// class Invoice {
//   readonly client: string;//allows read inside and outside the class but doesnt allows us to change the value
//   private details: string;//read and change inside the class
//   public amount: number;//change the value outside and inside of class
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`
//   }
// }
// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invOne.client = 'Aashish'
// // invTwo.details = 'work on mcDonalds'
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string):void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name:'shaun',
//   age: 30,
//   speak(text: string): void {
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log('I spent',amount);
//     return amount
//   }
// }
// console.log(me)
// const greetPerson = (person: IsPerson) => {
//   console.log('hello', person.name);
// }
// greetPerson(me)
//DOM & Type Casting
// const anchor = document.querySelector('a')!;
// // runtime check
// if(anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href)
const form = document.querySelector(".new-item-form");
// console.log(form.children)
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list Template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
