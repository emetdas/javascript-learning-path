var fname = 'Emet ';
var mname = "Chandra";
var lname = `Das`;
console.log(typeof (fname));
console.log(fname,mname,lname);
// `` use the multipul line write contant
// find lenth
console.log(fname.length);
// string concatination
console.log(fname + lname);
// Templet string ${fname}  Templet string use for the concatination
var templet = `my name is ${fname} ${mname} ${lname}`;
console.log(templet);
// esc charter use \' 
var esc = 'i\'am Emet Das';
console.log(esc);
// string indexing
var index = 'Mango';
console.log(index[0]);
// next line print 
var next = 'I am Emet Das as \n swoftware ';
console.log(next);
//string slicing this exampale start 0 means first charter to last charter
var stlc = fname.slice(0 , 3);
console.log(stlc);
var substring = fname.substr(0 , 4);
var substring = fname.substring(1 , 4);
console.log(substring);
// strign loware letter 
var lwo = "DEVELOPER";
var lowerletter = lwo.toLowerCase();
var lowerletter = lwo.toUpperCase();
console.log(lowerletter);