const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(7.5))

//arrays
let ninjas: String[] = [];
ninjas.push('shaun');

//union types

let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(20);

let uid: string|number;
uid='123';

//objects
let ninjaOne: object;
ninjaOne = {name:'yoshi',age:30}
console.log(ninjaOne)

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = { name:'mario' , age:20, beltColour: 'black'}

let age:any =25;

age="true"
console.log(age);
age="hello"
console.log(age);
age={name:'luigi'};
console.log(age);

let mixed1: any[] = []

mixed1.push(5);
mixed1.push('mario');
mixed1.push(false);
console.log(mixed);

let ninja: { name: any ,age: any }
ninja = {name:'yoshi',age:'23'};
console.log(ninja);

let greet:Function;

greet =() => {
    console.log('hello,again')
}

const add =(a:number ,b: number,c: number | string =10):void => {
    console.log(a+b)
    console.log(c)
}

add(5,10,'20')

const minus = (a: number, b: number) : number => {
    return a+b
}
 let result = minus(10,6)

//  const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
//  }

//  const greet1 = (user:{name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
//  }

 type StringorNum = string | number;
 type objWithName = { name: string; uid: StringorNum };
 
  const logDetails = (uid: StringorNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
  };

  const greet1 = (user: { name: string; uid: StringorNum }) => {
    console.log(`${user.name} says hello`);
  };

//   function signatures

let greet2: (a: string, b: string) => void;

// example 1

greet = (name:string, greeting:string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number,action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo
    }
}

// example 3
let logDetails1: (obj: {name: string, age: number}) => void;

type person ={name: string, age: number};

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};




