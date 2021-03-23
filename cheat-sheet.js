/*
===================
Part 1: Hello world 
===================
*/

console.log("Hello World");


/*
============================
Part 2: Variable declaration
============================
*/

// Declare local variable
let x = "X";
console.log(x);

x = "new X";
console.log(x);


// Declare globla variable
var y = "Y";
console.log(y);

y = "new Y";
console.log(y);


// Declare constant variable
const pi = 3.1415926535
console.log(pi);

// Will return error: const pi = 3.14

/*
================================
Part 3: Data type and Operations

Note:There are various data type
     in JavaScript including
     - number (1, 0.1, 0.11111)
     - string ("Hello")
     - boolean (true, false)
     - object ({x: 1, y: 2})
     - undefined
    
     Operations:
     - + (Addition)
     - - (Subtraction)
     - * (Multiply)
     - % (Mod)
     - / (Divide)
     - > (More than)
     - < (Less than)
     - >= (More than or equal to)
     - <= (Less than or equal to)
================================
*/

// number
let integer = 1;
let float = 0.1;
let double = 5.13136372318737113918123123;

console.log(integer + 5);
console.log(integer - double);
console.log(float * 100);
console.log(double / 5);
console.log(11 % 5);

console.log(typeof integer);


// string
let string1 = "This is a string";
console.log(string1);

let string2 = "My name is: ";
let myName = "Fong";

console.log(string2 + myName); // My name is: Fong
console.log(myName.length); // 4
console.log(string2.split(' ')); // ["My", "name", "is:"]
console.log(myName.toUpperCase()); // FONG
console.log(typeof string1); // String


// boolean
let booleanTrue = true;
let booleanFalse = false;


// Objects and Array
let names = ["Fong", "New"];
console.log(names); // ["Fong", "New"]
console.log(names[0]); // Fong
console.log(names[1]); // New

// Add new things to array
names.push("Jack");
console.log(names); // ["Fong", "New", "Jack"]

names[0] = "Robert";
console.log(names); // ["Robert", "New", "Jack"]

let studentData = {
    firstname: "Chanatip",
    lastname: "Vachirathanusorn",
    studentNumber: 36750,
    class: 512
};
console.log(studentData);
console.log(studentData.firstname); // Chanatip
console.log(studentData.lastname); // Vachirathanusorn
console.log(studentData.studentNumber); // 36750
console.log(studentData.class); // 512



// null
let femaleInThisClass = null;
console.log(femaleInThisClass);

// undefined
let someVariable;
console.log(typeof someVariable);


/*
=============
Part 4: Logic
=============
*/

let num1 = 1;
let num2 = 5;

isNum1MoreThanNum2 = num1 > num2;
console.log(isNum1MoreThanNum2);

// Comparison
console.log("xz" == "xz"); // true
console.log("xz" != "xz"); // false
console.log("xz" != "xy"); // true
console.log(!true); // false
console.log(!false); // true
console.log(1 > 0); // true
console.log(10 < 9); // false
console.log(10 >= 10); // true

// Logic
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false

if (isNum1MoreThanNum2) {
    console.log("Num 1 is more than num 2");
} else {
    console.log("Num 1 is not more than num 2");
}

// Use else
if (testNumber < 10){
    console.log("Number is less than 10");
} else if(testNumber > 10){
    console.log("Number is more than 10");
} else {
    console.log("Number is 10");
}

if (testNumber < 10 && testNumber % 2 == 0){
    console.log("Number is less than 10");
} else if(testNumber > 10 || testNumber % 2 == 0){
    console.log("Number is more than 10");
} else {
    console.log("Number is 10");
}


/*
============
Part 5: Loop
============
*/

// While loop

let i = 0;

while (i < 10){
    console.log("Looping " + i);
    i++;
}

i = 0;

while (true){

    i++;

    if(i >= 10){
        break;
    } else if(i == 4){
        continue;
    }

    console.log("Looping " + i);

}

// For loop

for(let i = 0; i < 10; i++){

    console.log("Looping " + i);

}

// For loop through array

let studentIds = [35555, 36593, 37102, 56395];

for(let studentId of studentIds){

    console.log("Student Id: " + studentId);

}

for(let index = 0; index < studentIds.length; index++){

    console.log("Student Id: " + studentIds[index]);

}

studentIds.forEach((studentId, index) => {

    console.log("Student Id: " + studentId);

});

let foodMenu = [
    {
        name: "Hamburger",
        price: 150
    },
    {
        name: "Spaghetti",
        price: 120
    },
    {
        name: "French fries",
        price: 60
    }
];

let foodPrices = [];

for(let food of foodMenu){
    foodPrices.push(food.price);
}

console.log(foodPrices); // [150, 120, 60]


/*
=================
Part 6: Functions
=================
*/


// Void function (return nothing)

function helloWorld() {
    console.log("Hello World!")
}

helloWorld();
helloWorld();

function add(a, b){
    console.log(a + b);
}

add(3, 5); // 8

let m = 0;

function increaseM(num){
    m += num;
}

console.log(m); // 0
increaseM(5);
console.log(m); // 5
increaseM(3);
console.log(m); // 8


// Other functions

const isEven = (num) => {

    return num % 2 == 0; // returns true of false (boolean)

}

let age = 18;
let isAgeEven = isEven(age);

if(isEven(age)){

    console.log("Age is even");

}

console.log("It is " + isEven(age) + " that age is even");


// Callback functions

setTimeout(helloWorld, 1000);
setTimeout(() => {
    console.log("HAHAHAHA");
}, 2000);

function getData(callback){

    setTimeout(() => {
        let data = 1000;
        callback(data);
    }, 3000);

}

getData((data) => {
    console.log("Data is: ", data)
});

/*
========================
Part 7: External Library
========================
*/

const fs = require("fs");
const path = require("path");

fs.writeFileSync("test.txt", "Hello")

const baseDir = process.cwd();
console.log(path.join(baseDir, "test.txt"));

// npm install node-fetch

const fetch = require("node-fetch");

function getDataFromWeb(url, callback){
    fetch(url)
        .then(data => data.text())
        .then(text => {
            callback(data);
        });
}

async function getDataFromWeb(url, callback){
    let data = await fetch(url);
    let dataText = await data.text();
    callback(dataText);
}

getDataFromWeb("https://www.wsj.com/graphics/are-electric-cars-really-better-for-the-environment/?mod=hp_lead_pos10", (data) => {console.log(data);});


/*
===================================
Part 8: Object Oriented Programming
===================================
*/

class Dog{

    lifespan = {
        "retriever": 10,
        "german shepard": 15,
        "pug": 8
    }

    constructor(name, specie, age){
        this.name = name;
        this.specie = specie;
        this.age = age;
    }

    bark(){
        console.log("ฮ่งๆๆๆๆ");
    }

    getLifeSpan(){
        return this.lifespan[this.specie];
    }

    getTimeLeft(){
        return this.getLifeSpan() - this.age;
    }

    getHumanAge(){
        let humanAge = 80;
        return (humanAge / this.getLifeSpan()) * this.age;
    }

}

let MyDog = new Dog("Daisy", "retriever", 5);
console.log(MyDog.name);
console.log(MyDog.bark());
console.log(MyDog.getLifeSpan());
console.log(MyDog.getTimeLeft());
console.log(MyDog.getHumanAge());


class SpecialDog extends Dog{

    setAge(newAge){
        this.age = newAge;
    }

}

let MySpecialDog = new SpecialDog("Gordon", "german shepard", 6);

console.log(MySpecialDog.age);
MySpecialDog.setAge(2)
console.log(MySpecialDog.age);