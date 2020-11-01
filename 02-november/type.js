let val;
// number to string
val = String(5255);
val = String(10+12);
// Boolean to string
val = String(false);
// Data to string
val = String(new Date());
// Array to string
val = String([1,2,1,5]);
// toString
val = (10-11).toString();
val = (true).toString();
// string to number
val = Number('10');
val = Number(true);
val = Number(null);
val = Number('Emet Das');
val = Number([1,2,1,5]);

val = parseInt('100.21');
val = parseFloat('132.43');
// Output
console.log(val);   
console.log(typeof val);  
// console.log(val.length);  
console.log(val.toFixed(1));  


const one = String(10);
const two = 19;
const sum = one + two;
console.log(sum);
console.log(typeof sum);