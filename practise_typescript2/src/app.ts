import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/Payment.js';
import { HasFormatter } from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classes/ListTemplate.js"


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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children)

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list Template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string,string,number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc,type.value,'end')
});

// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj,uid}
// }

// let docOne = addUID({name:'yoshi', age: 40});

//throws error as object after modification doesnt know what properties are added into it
// console.log(docOne.name)

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj,uid}; 
}

let docOne = addUID({num: 12,name:'Aashish', age: 40});
//let docTwo = addUID('hello')

console.log(docOne)

// with interface
enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR,
  data: "shaun",
};

const docFour: Resource<string[]> ={
  uid: 2,
  resourceName: ResourceType.DIRECTOR,
  data:['aashish','bhandari']
}
console.log(docThree, docFour);

// tuples 

let tup: [string, number, boolean] = ['ryu',25,true]//ok
// let tup: [string, number, boolean] = [25,'ryu',true] wrong as order in tuple must be maintained once defined
tup[0] = 'ken';
tup[1] = 30;


