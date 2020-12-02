// number
let num1 = 20;
let num2 = 30;
let num3 = 3.30;
// maths operators
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Math.PI);
console.log(2**53-1);

// operator precedence and associativity rule
// parentesis _____
// exponentiation right to left
// *,/,% left to right
// +,- left to right

// e in numbers
// let thsound = 1e3; //1 * 1000 
// let thsound = 1e-3; //1 / 1000 
// console.log(thsound);
// number separators
let num = 10_0_0_0;
console.log(num);
// increment and decrement operators
let inc = 100;
inc++;
let dec = 100;
--dec;
console.log(dec);
// prefix vs postfix
// inc++;
// mixing strings and numbers (weird)
let age = 25;
let man = "30";
console.log(man,age);
console.log(man + age);
console.log(man - age);
// parseInt and parseFloat
let nam5 = 20;
let nam6 = "20";
console.log(nam5 + parseInt(nam6));
let nam7 = 20;
let nam8 = "2.09hlw"; // ignor hlw
console.log(nam7 + parseFloat(nam8));
// typof operator
console.log(typeof nam8);
// Null and Undefined
let udefind;
let nul = null;
console.log(udefind);
console.log(nul);
// javascript Math object --- round, ceil, floor, abs, max, min
let math = Math.round(10.13);
console.log(math);
let chil = Math.ceil(10.13);
console.log(chil);
let flor = Math.floor(10.93);
console.log(flor);
let abs = Math.abs(10.93); // positive number
console.log(abs);
let max = Math.max(20,20,30,4,10,10,10);
console.log(max); 
let min = Math.min(10,4,10,12);
console.log(min); 
// generate random integers using javascript
let random = Math.random()*10; // 0 to 10 midel randorm number 
let randoms = Math.floor(Math.random()*10);
let rand = Math.round(Math.random()*10);
console.log(rand);
// [5,10]
let minr = 5;
let maxr = 10;
let randTwo = Math.floor(Math.random()* (maxr-minr) + minr); // not includ 10
let randTwos = Math.floor(Math.random()* (maxr-minr+1) + minr); // includ 10
console.log(randTwo);
console.log(randTwos);
// BigInt
let bignum =BigInt(9007199254740992020920920900); // n bigint
bignum = bignum + 2n;
console.log(bignum);

// operators that we can use with bigInt
console.log(1/0);
console.log(-1/0);





