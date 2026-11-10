
//Primitive Data Types in JavaScript
//1
let studentName = "Mohamed Rafeek";
console.log(typeof studentName);     // Output: string

//2
let employeeAge = 24;
console.log(typeof employeeAge);     // Output: number

//3
let isWorking = true;
console.log(typeof isWorking);     // Output: boolean

//4
let a;
console.log(a);     // Output: undefined

//5 & 6
let name = "Rafeek";
let age = 24;
let isStudent = true;
let course;
let result = null;

console.log(typeof name);     // Output: string
console.log(typeof age);      // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof course);   // Output: undefined
console.log(typeof result);   // Output: object

//7
let courseName = "JavaScript";
console.log(courseName);     // Output: JavaScript

// 8
let batchNumber = 42;
console.log(typeof batchNumber);     // Output: number


//Arrays in JavaScript

//9
let fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];
console.log(fruits);     // Output: ["Apple", "Mango", "Orange", "Grapes", "Banana"]

//10
console.log(fruits[0]);     // Output: Apple

//11
console.log(fruits[2]);     // Output: Orange

//12
console.log(fruits[fruits.length - 1]);     // Output: Banana

//13
let details = ["Rafeek", 24, "Bengaluru", "Developer"];
console.log(details);     // Output: ["Rafeek", 24, "Bengaluru", "Developer"]

//14
console.log(details[0]);     // Output: Rafeek
console.log(details[1]);     // Output: 24
console.log(details[2]);     // Output: Bengaluru
console.log(details[3]);     // Output: Developer

//15
let Array = ["JavaScript", 42, true, "Python", 100];
console.log(Array);     // Output: ["JavaScript", 42, true, "Python", 100]

//16
console.log(Array.length);     // Output: 5

//17
let mobiles = ["Apple", "Samsung", "OnePlus", "Vivo", "Oppo"];

console.log(mobiles[1]);     // Output: Samsung

//18
let languages = ["Java", "Python", "C", "C++", "JavaScript", "PHP"];

console.log(languages[languages.length - 1]);     // Output: PHP

//objects in JavaScript

//19
let student = {
    name: "Rafeek",
    age: 24,
    city: "Bengaluru"
};

console.log(student); // Output: { name: "Rafeek", age: 24, city: "Bengaluru" }

//20
console.log(student.name); // Output: Rafeek    

//21
console.log(student.age); // Output: 24     

//22
let employee = {
    name: "Rafeek",
    salary: 25000,
    designation: "Java Developer"
};

console.log(employee); // Output: { name: "Rafeek", salary: 25000, designation: "Java Developer" }

//23
let person = {
    skills: ["Java", "Python", "HTML", "CSS", "JavaScript"]
};

console.log(person.skills[2]);      // Output: HTML

//24
let sample = {
    fruit: "Apple",
    number: 100,
    isAvailable: true,
    toy: "Car"
};

console.log(sample); // Output: { fruit: "Apple", number: 100, isAvailable: true, toy: "Car" }

//25
console.log(sample.toy); // Output: Car

//26
let company = {
    companyName: "Stackly",
    location: "Bengaluru",
    employeeCount: 100
};

console.log(company); // Output: { companyName: "Stackly", location: "Bengaluru", employeeCount: 100 }


//Arithmetic Operations in JavaScript

//27

let c = 10;
let b = 20;

console.log(c + b); // Output: 30

//28

let d = 50;
let e = 20;

console.log(d - e); // Output: 30

//29
let f = 2;
let g = 3;
let h = 4;

console.log(f * g * h); // Output: 24

//30
let i = 100;
let j = 5;

console.log(i / j); // Output: 20

//31
let k = 25;
let l = 4;

console.log(k % l); // Output: 1

//32
let m = 3;

console.log(m ** 4); // Output: 81

//33
let n = 20;
let o = 5;

console.log("Addition :", n + o);      // Output: Addition : 25
console.log("Subtraction :", n - o);  // Output: Subtraction : 15
console.log("Multiplication :", n * o); // Output: Multiplication : 100
console.log("Division :", n / o);      // Output: Division : 4
console.log("Modulus :", n % o);      // Output: Modulus : 0
console.log("Exponentiation :", o ** 4); // Output: Exponentiation : 625

//increment and Decrement Operators in JavaScript
//34

let p = 10;
let q=++p;
console.log(p);// Output: 11

console.log(q);// Output: 11

//35
let r = 20;
let s = r++;
console.log(r);// Output: 21

console.log(s);     // Output:  20

//36
let t = 30;
let u = --t;
console.log(t);// Output: 29
console.log(u);// Output: 29

//37
let v = 40;
let w=v--;
console.log(w);// Output: 40
console.log(v);// Output: 39

//38

let a1 = 10;
let b2 = a1++;    // b2=10, a1=11

console.log(a1);  // Output: 11
console.log(b2);  // Output: 10

//39
let x = 15;
let y = ++x;  // y=16, x=16

console.log(x);  // Output: 16

console.log(y);   // Output: 16


//40

let num1 = 25;

let num2 = --num1;  // num2=24, num1=24

let num3 = num2++;  // num3=24, num2=25

let num4 = ++num3;  // num4=25, num3=25

console.log(num1);  // Output: 24
console.log(num2);  // Output: 25
console.log(num3);  //Output: 25
console.log(num4);  // Output: 25







