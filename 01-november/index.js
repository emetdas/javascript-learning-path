// Traniry operator ?
let name = "Emet Das";
let age = 20;
// 1st way
age >= 18 ? console.log(name + "You Drive Care") : console.log(name + "You not drive");
// 2nd way
var drive = age >=18 ? 'drive' : 'not drive';
console.log(drive);


// switch stetment
var furit = 'apple';
switch (furit) {
    case 'mango':
        console.log("you buy the mango");
        break;
    case 'apple':
        console.log("you buy the apple");
        break;

    default:
        console.log("you not buy any thing");
}
// switch stetment use two and or value 