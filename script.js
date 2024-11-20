// *********************** Variables in JS ***********************

// var =>>> both redeclare & reinitialize
// let =>>> only reinitialize not redeclare
// const =>>> not redeclare not reinitialize

// *********************** DataTypes in JS ***********************

// "According to save and access data from memory , there has two types of datatypes..""

// Primitive datatypes wo simple aur basic types hote hain jo directly value store karte hain aur immutable hote hain (jaise `Number`, `String`, `Boolean`), jabke non-primitive datatypes complex hote hain, jaise `Objects` aur `Arrays`, jo multiple values ko store karte hain aur mutable hote hain (unhein modify kiya ja sakta hai).

// ### Pros and Cons:
// - **Primitive types** are faster to access and require less memory, but they can't be changed once created.
// - **Non-primitive types** offer flexibility to store complex data structures, but they are slower to access and require more memory.

// 1) Primitive DataTypes -- 7 Types
// i-   String ("")
// ii-  Number (2^53)
// iii- BigInt
// iv-  Boolean(true/false)
// v-   Null
// vi-  Undefined
// vii- Symbol (Kisi bhi component ko unique bnane k liye)

// let myName = "Ifra";
// const myAge = 20;
// const BigInt = 1234567890123456789012345678901234567890n;
// const isLoggedIn = true;
// const response = "";
// let value;
// let id = Symbol('123');
// let anotherId = Symbol('123');
// console.log(id == anotherId);

// 1) Reference (Non-Primitive) DataTypes -- 3 Types
// i-   Array
// ii-  Objects
// iii- Functions

// const fruits = ["apple","mango","banana","grapes"];
// let myObj = {
//     name:"Ifra Shamim",
//     age: 20
// };
// let myFunc = function (){
//     console.log("Hello World!");

// };

// console.log(typeof);

// *********************** DataTypes Conversion Confusion ***********************
//  let age = "20";
//  let myAge = Number(age);
//  console.log(typeof myAge);

//  let age = 20;
//  let myAge = String(age);
//  console.log(typeof myAge);

//  let age = 2;
//  let myAge = Boolean(age);
//  console.log(typeof myAge);
//  console.log(myAge);

//  let age = 20;
//  let myAge = BigInt(age);
//  console.log(typeof myAge);
//  console.log(myAge);

//  let age = "20";
//  let myAge = BigInt(age);
//  console.log(typeof myAge);
//  console.log(myAge);

//  let age = null;
//  let myAge = BigInt(age);
//  console.log(typeof myAge);
//  console.log(myAge); ---- Bug , Can't convert bigInt to a null

// let age = undefined;
// let myAge = BigInt(age);
// console.log(typeof myAge);
// console.log(myAge); ---- Bug , Can't convert bigInt to a undefined

// *********************** Comparison of DataTypes ***********************

// console.log("1" + 3 + 4);
// console.log(5 + 6 + "5");
// console.log(+true);
// console.log(+"");

// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);

// *********************** Stack (Primitive - Copy) & Heap Memory (Non-Primitive) in Js ***********************

// Stack memory is beneficial for fast access to simple data.
// Heap memory is beneficial when working with larger, more complex data structures that need to persist longer.

// let myAge = 20;
// let myNewAge = myAge;
// myNewAge = 21;
// console.log(myAge);
// console.log(myNewAge);

// let userOne = {
//     email: "ifrashamim29@gmail.com",
//     pass: "1234"
// }
// let userTwo = userOne;
// userTwo.email = "nisha@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);

// *********************** Strings In Js ***********************

// const myName = new String('Ifra Shamim');
// console.log(myName[0]);
// console.log(myName.__proto__);
// console.log(myName.length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(2)); --- kis index pr knsa character he
// console.log(myName.indexOf('r')); --- knsa character kis position mein he
// const newString = myName.substring(0,4);  --- last wala index include ni hoga
// console.log(newString);
// const newString = myName.substring(-11,4); -- isme negative value bhi de sakty hn
// console.log(newString)
// const myBook = "  John Ducket  ";
// console.log(myBook);
// console.log(myBook.trim());  --- remove whitspaces from start and end to the string
// const url = "ifrashamim@gmail.com/IfraShamim%2029";
// console.log(url.replace('%20','-'));
// console.log(url.includes('ifra'));
// console.log(url.split('.'));

// *********************** Numbers In Js ***********************

// const myAge = new Number(20.899);
// console.log(myAge);
// console.log(myAge.toString.length);
// console.log(myAge.toFixed(3));
// console.log(myAge.toPrecision(3));
// console.log(myAge.toLocaleString());

// console.log(Math.round(4.7));
// console.log(Math.abs(-20));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log((Math.random()*10 ) + 1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max-min + 1)) + min);

// console.log(Math.floor(Math.random()*6)+1);
// const min = 1;
// const max = 100;
// console.log(Math.floor(Math.random(max - min)*max)+1);
// console.log(
//   `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
//     Math.random() * 256
//   )},${Math.floor(Math.random() * 256)})`
// );

// ************ Object ************
// Hum objects ka use is liye krty hain takay hum related data ko ek organized structure m group kr saken,
// jese ek student ke name, id, aur marks ko ek hi entity m rakhna.
// There are two two ways to declare objects
// i) Literals
// ii) Constructor -- object.create
// One more concept in object is singleton,
// whenever constructor method is used to make object , this is caleed singleton
// const mySym = Symbol("Key1");
// const jsUser = {
//    name: "Ifra",
//    "full name": "Ifra Shamim",
//    email: "ifrashamim29@gmail.com",
//    [mySym]: "myKey1"
// };
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// Object.freeze(jsUser);
// jsUser.email = "ifrashamim29@google.com";
// console.log(jsUser.email);
// console.log(jsUser);
// const jsUser = new Object();
// jsUser.name = "Ifra";
// jsUser.id = "061";
// console.log(jsUser);
// const obj1 = {
//     1: "Ifra",
//     2: "061"
// };
// const obj2 = {
//     1: "Nisha",
//     2: "071"
// };
// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));
// console.log(obj1.hasOwnProperty('1'));
// Object Destructuring
// const obj1 = {
//     1: "Ifra",
//     2: "061"
// };

// const {1 : name} = obj1;
// console.log(name);

// ********** Scope Level & Mini Hoisting **********
// function one(){
//     let myName = "Ifra Shamim";
//     function two(){
//         let age = 20;
//         console.log(myName);
//     }
//     // console.log(age);
//     two();
// }
// one();
// console.log(addTwo(4));
// function addTwo(num){
//     return num + 2;
// }
// add(3); HOISTING
// This function sometimes called expressions
// const add = function(num){
//     return num + 2;
// }

// ********** This & Arrow Function **********
// This - jb current context(values) ko refer krna ho
// const user = {
//     name: "Ifra Shamim",
//     age: 20,
//     welcomeMessage: function(){
//         console.log(`${this.name}, Welcome`);
//         console.log(this);
//     }
// }
// console.log(this);

// user.welcomeMessage();
// user.name = "Ifra";
// user.welcomeMessage();
// const user = () => {
//     let username = "Ifra";
//     console.log(this.username);
//     console.log(this);
// };
// user();
// Implicit Return (Assumption)
// const addTwo = (num1,num2) => (num1 + num2);
// console.log(addTwo(5,6));

// Immediately Invoked Function Expression
// Global Scope k Variables ya pollution ko remove krne k liye ye function ka use hota he
// (function chai(){
//     console.log("Ifra");
// }());
// var name = "Ali";
// function showName() {
//     var name = "Ahmed";
//     console.log(name); // Output: Ahmed
// }
// showName();
// console.log(name); // Output: Ali
// While & Do While Loop
// let index = 0;
// while (index <= 10) {
//     console.log(index);
//     index = index +  2;
// }
// let score = 1;
// do{
// console.log(score);
// score++;
// }
// while(score <= 10);

// ********** Javascript Execute Code + Call Stack **********
// Javascript Execution Context - Execution context ka mtlb ye hota he k apne jo file bnai he usko javascript run kese kregi
// There are two phase to run the javascript
// 1) Memory Phase / Memory Creation Phase / Creation Phase - isme just variables k liye space allocate kiya jata he , execution ni hoti he
// 2) Execution Phase
// Global Execution Context
// Function Execution Context
// Eval Execution Context
// let val1 = 5;
// let val2 = 10;
// function addNum(num1 , num2){
//     let total = num1 + num2;
//     return total;
// }
// let result1 = addNum(val1,val2);
// let result2 = addNum(10,2);

// ****** High Order Array Loops ******
// const arr = [1,2,3,4,5];
// for (const key in arr) {
//     console.log(arr[key]);

// }
// for (const num of arr) {
//     console.log(num);

// }
// Map - is an object which holds key value pair
// const map = new Map();
// map.set('IN',"India");
// map.set('USA',"United States Of America");
// map.set('IN',"India");
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,':-',value);

// }
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
// for (const key in myObject) {
//   console.log(myObject[key]);

// }
// const arr = [1,2,3,4,5];
// arr.forEach(function (item){
//     console.log(item);
// })
// arr.forEach((item) => {
//     console.log(item);
// })
// function num(item) {
//     console.log(item);
// }
// arr.forEach(num)
// const myBook = [
//     {
//         bookName: 'Global',
//         bookYear: '2023'
//     },{
//         bookName: 'Local',
//         bookYear: '2024'
//     }
// ]
// myBook.forEach((item) => {
//     console.log(item.bookName);

// })

// ***** Filter , Map , Reduce *****

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);
// - **`filter()`**: Returns a new array with elements that pass a condition.
// - **`map()`**: Transforms each element of an array and returns a new array.
// - **`reduce()`**: Reduces an array to a single value by applying a function to each element.
// const numbers = [10, 25, 40, 55, 70, 85];
// const filteredNumbers = numbers.filter(num => num > 30);
// console.log(filteredNumbers);  // Output: [40, 55, 70, 85]
// const mappedNumbers = numbers.map(num => num * 2);
// console.log(mappedNumbers);  // Output: [20, 50, 80, 110, 140, 170]
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);  // Output: 285

// ***** Events *****
//  JS m jitne bhi events hn wo sequentially hi run hoty hn , kuch exceptions hn
// Event Propagation - event bubbling , event capturing
// **Events** wo actions ya occurrences hoti hain (jaise clicks, key presses, ya page load hona) jin par JavaScript webpage ko respond kar sakta hai.

//  **** Junk Artifacts And NodeType ****
// let a = document.childNodes[0].childNodes[1].childNodes[0];
// console.log(document.nodeType);
// let parent = document.getElementById("div1");
// let target = parent.firstChild;
// nName = target.nodeName;
// console.log(nName);

// var nType = targetNode.nodeType
// console.log(nType);

// console.log(a);
// # Install ESLint
// npm install eslint --save-dev

// # Run ESLint to find unused code
// eslint yourfile.js

// **** How to create DOM elements ****
// const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children[1].innerHTML);
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }
// parent.children[1].style.color = 'red';
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(document.querySelector('.child').parentElement);
// console.log(document.querySelector('.child').nextElementSibling);
// console.log(`Nodes:` ,  parent.childNodes);

// const div = document.createElement('div');
// div.style.backgroundColor = 'green';
// div.style.padding = `12px`;
// // div.innerText = 'Ifra Shamim';
// const addText = document.createTextNode('Ifra Shamim');
// div.appendChild(addText);
// document.body.appendChild(div);

// **** Edit & Remove DOM elements ****
// function addLanguageName(langName){
//     const li = document.createElement('li');
//     li.innerHTML = `${langName}`;
//     document.querySelector('.language').appendChild(li);
// }
// addLanguageName('Typescript');
// addLanguageName('Python');
// function addOptiLanguage(langName){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(langName));
//     document.querySelector('.language').appendChild(li);
// }
// addOptiLanguage('Typescript');
// addOptiLanguage('Next Js');
// Edit
// const secondLang = document.querySelector(`li:nth-child(2)`);
// const newElement = document.createElement('li');
// newElement.textContent = 'Ifra Shamim';
// secondLang.replaceWith(newElement);
// Remove
// newElement.remove();

//  ******* Async JS Fundamentals *******
// Javascript is a synchronous and single threaded language
// Synchronous ka mtlb hai ke tasks ek ke baad ek, sequence mein, bina delay ke, line-by-line complete hotay hain.
// >> Each operation waits for the last one to complete before executing
// Execution Context
// execute one line of code at a time ,

// Blocking Code >> Block the flow of program , read file synchronous
// Non Blocking Code >> Does not block execution , read file asynchronous
// (JavaScript mein **async** ka fundamental concept yeh hai ke yeh functions ko **non-blocking**
// banata hai, jo promise ko await karke asynchronous tasks ko sequentially aur readability ke sath
//  handle karne mein madad karta hai.)

// ********* Asyn *********
// const sayIfra = setTimeout(function(){
//     console.log("Ifra Shamim")
// },2000);
// const sayDev = setTimeout(function(){
//     console.log("Developer");
//     },2000);
// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(sayDev);
//     console.log("Stopped");

// })
// setInterval(function(){
//     console.log("Ifra",Date.now());
// },1000);
// const sayDate = function () {
//   console.log("Ifra", Date.now());
// };
// let intervalId;
// document.querySelector("#start").addEventListener("click", function () {
//     intervalId = setInterval(sayDate, 1000);
// });
// document.querySelector("#stop").addEventListener("click", function () {
//   clearInterval(intervalId);
//   console.log("Stopped!");
// });

// ******** Api Request ********
// const xhr = new XMLHttpRequest();
// const requestURL = "https://api.github.com/users/IfraShamim";
// xhr.open('GET',requestURL);
// xhr.onreadystatechange = function(){
//   console.log(xhr.readyState);
//   if(xhr.readyState === 4){
//     const data = JSON.parse(this.responseText);
//     console.log(typeof data);
//     console.log(data.followers);
//     console.log(data.public_repos);
//     console.log(data.following);
//     console.log(data.avatar_url);
//   }
// }
// xhr.send();

// ******** Promise ********

// Way 1
// const promiseOne = new Promise(function(resolve,reject){
//   // Async Task
//   setTimeout(function(){
//     console.log('Async Task completed.');
//   },1000);
//   resolve();
// });
// promiseOne.then(function(){
//    console.log('Promise completed.');
// });

// Way 2
// new Promise(function(resolve,reject){
//   // Async Task
//   setTimeout(function(){
//     console.log('Async Task completed.');
//   },1000);
//   resolve();
// }).then(function(){
//   console.log("Promise Completed");
// });

// Way 3
// new Promise(function(resolve,reject){
//   // Async Task
//   setTimeout(function(){
//     resolve({username: "Ifra", email : "ifra@example.com"});
//   },1000);
// }).then(function(user){
//   console.log(user);
// });

// Way 4
// new Promise(function(resolve,reject){
//   const error = false;
//   if(!error){
//     resolve({username : "Ifra" , age : "21"});
//   }
//   else{
//     reject('Something went wrong');
//   }
// }).then(function(user){
//   console.log(user);
//   return user.username;
// }).catch(function(error){
//   console.log(error);
// }).finally(() =>{
//   console.log("The Promise is either resolved or rejected.");
// })

// Way 5
// const promiseFive = new Promise(function(resolve,reject){
//   const error = true;
//   if(!error){
//     resolve({username : "Ifra" , age : "21"});
//   }
//   else{
//     reject('Something went wrong');
//   }
// });
// async function consumePromiseFive(){
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// ******** Object Oriented ********
// Object - "Collection of properties and methods"
// ( Object-Oriented Programming (OOP) ek programming paradigm hai jo objects
// aur unki properties aur behaviors (methods) ke gird ghoomti hai, jisme concepts jaise
//  encapsulation, inheritance, polymorphism aur abstraction use hote hain. )

// Why use OOP?

// 1. **Encapsulation**: Data aur methods ko ek object ke andar bundle karna aur unhe bahar se protect karna.
// 2. **Inheritance**: Ek class ka doosri class se properties aur methods ka waris banna.
// 3. **Polymorphism**: Ek hi function ya method ka alag-alag forms me kaam karna.
// 4. **Abstraction**: Sirf zaroori details show karna aur unnecessary complexity ko chhupana.
// // Encapsulation
// class Animal {
//     constructor(name, sound) {
//       this.name = name; // Public property
//       let privateSound = sound; // Private property

//       // Public method to access private property
//       this.getSound = function () {
//         return privateSound;
//       };
//     }

//     speak() {
//       console.log(`${this.name} says ${this.getSound()}`);
//     }
//   }

//   // Inheritance
//   class Dog extends Animal {
//     constructor(name, sound, breed) {
//       super(name, sound); // Call parent constructor
//       this.breed = breed; // Additional property for Dog
//     }

//     // Polymorphism (overriding speak method)
//     speak() {
//       console.log(`${this.name} is a ${this.breed} and says ${this.getSound()} loudly!`);
//     }
//   }

//   // Abstraction
//   function animalInfo(animal) {
//     // Abstracting internal details and showing only necessary information
//     console.log(`This is a ${animal.name}, it makes a sound.`);
//   }

//   // Example usage
//   const genericAnimal = new Animal("Animal", "Generic Sound");
//   genericAnimal.speak(); // Animal says Generic Sound

//   const myDog = new Dog("Buddy", "Woof", "Golden Retriever");
//   myDog.speak(); // Buddy is a Golden Retriever and says Woof loudly!

//   animalInfo(myDog); // This is a Buddy, it makes a sound.

// const user = {
//     name: "Ifra Shamim",
//     age: 20,
//     welcomeMessage: function(){
//         console.log(`${this.name}, Welcome`);
//         console.log(this);
//     }
// }
// console.log(user.welcomeMessage());

// ****** Constructor Function ********
// Ek hi object literal se ap multiple instances bna sako..
// Example: const date = new Date();
// function User(username, id, isLoggedIn){
//     this.username = username;
//     this.id = id;
//     this.isLoggedIn = isLoggedIn;

//     return this;
// }
// const userOne = new User("Ifra",1,true);
// const userTwo = new User("Nisha",2,false);
// console.log(userOne);

// ******* Magic of Prototype ********
// JS behaviour is prototype inheritance

// ***** Call & This ***********

// Clousre
// Closure JavaScript ka ek mechanism hai jisme ek function apne lexical scope ke bahar ki variables ko yaad rakhta hai, chahe wo function execute hone ke baad bhi accessible ho.
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//       console.log(`Outer Variable: ${outerVariable}`);
//       console.log(`Inner Variable: ${innerVariable}`);
//     };
//   }

//   const closureExample = outerFunction("Hello"); // outerFunction ka scope yahan save ho gaya
//   closureExample("World"); // "Hello" (outerVariable) aur "World" (innerVariable) ko access karta hai

// ***** Rest Parameters *******
// function sum(...args){
//     let result = 0;
//     for(let i=0; i<args.length; i++){
//         result += args[i];
//     }
//     console.log(result);
// }
// sum(3,7,8);

// ******* Spread Operator *******
// let array1 = [1,2,3];
// let array2 = [4,5,6,...array1];
// console.log(array2);

// function outer(){
//     let num = 1;
//     function inner1(){
//       let name = 4;
//       console.log(num,name);
//     }
//     function inner2(){
//       let num = 7;
//       console.log(num);
//       console.log(name);
//     }
//     inner1();
//     inner2();
//     console.log(name);
//     console.log(num);
//   }
//   outer();
//   inner1();
//   inner2();

// ( Function along with its lexical scope called closure )

// ********** Destructuring Array **********
// let arr = ["Ifra",8];
// let name = arr[0];
// let age = arr[1];

// let arr = ["Ifra",8];
// let[name,age] = arr;

// function user(){
//   return ["Ifra",8];
// }
// let [name,birth] = user();
// console.log(birth);

// ********* Destructuring Object   *********
// let user = {
//   name : "Ifra",
//   age: 8
// }

// let {name : n,age : a} = user;
// console.log(n);
// console.log(a);

// ******** Generators ********
// Jb hamein function m control chahye ho tb generator function bnaty hn
// function *test(){
//   yield "First";
//   yield "Second";
//   yield "Third";
// }
// let g = test();
// console.log(g.next());

// function *generateIt(){
//   let result = (yield) * 2;
//   console.log(`Result : ${result}`);
// }
// let g = generateIt();
// g.next();
// g.next(500);

// function *generateIt(){
//   let result = [yield,yield , yield];
//   console.log(`Result : ${result}`);
// }
// let g = generateIt();
// g.next();
// g.next(500);
// g.next(100);
// g.next(500);

// function *generateIt(){
//   yield 55;
//   yield* ["Ifra","Ahnaf"];
// }
// let g = generateIt();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function *generateIt(){
//   yield 55;
//   yield* ["Ifra","Ahnaf"];
// }
// let g = generateIt();
// console.log(g.next().value);
// console.log(...g);

// function *generateIt(){
//   yield 55;
//   yield* ["Ifra","Ahnaf"];
// }
// let g = generateIt();
// console.log(g.next().value);
// console.log(g.return('Ending Now'));

// ****************** Modules ******************
// export let name = "Ifra";
// export function user(){
//   console.log("User");
// }
// export class greet{

// };

// export default function(){
//   console.log("Hello");
// }

// ****************** Promise ******************
// function prom(a, b) {
//   return new Promise(function (resolve, reject) {
//     console.log("Fetching data , Please wait..");
//     let c = a / b;
//     setTimeout(() => {
//       if ((a, b)) {
//         resolve(`Your answer: ${c}`);
//       } else {
//         reject("Failed to calculate.");
//       };
//     }, 2000);
//   });
// }

// prom(9,2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ****************** Promise all ******************
// let p1 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//     console.log(`The first promise has been resolved.`);
//     resolve(10);
//   },1 * 1000);
// });
// let p2 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//     console.log(`The second promise has been resolved.`);
//     resolve(20);
//   },1 * 2000);
// });
// let p3 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//     console.log(`The third promise has been resolved.`);
//     resolve(30);
//   },1 * 3000);
// });
// Promise.all([p1,p2,p3]).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// ****************** Ajax ******************
// Ajax is a technique for creating fast and dynamic web pages.
// function loadData() {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", "./content/readme.txt", true);
//   xhttp.send();
// }

// ****************** Fetch ******************
// Fetch return promise
// fetch("content/readme.txt").then((response) => {
//   // console.log(response.text());
//   return response.text();
// }).then((data) => {
//   // console.log(data);
//   document.write(data);
// });
// fetch("content/readme.txt")
// .then(response => response.json())
// .then(data => document.write(data))
// .catch(error => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     for (var x in json) {
//       console.log(json[x].id);

//     }
//   });

// ********** Async Await **********
// Async function return promise
// async function test() {
//   return "Hello";
//   console.log("Hello");
  
// }
// test();
