let me = ' John S.';
let favNumber = 17;
let favColor = 'orange';
let aptNum = 223;
let birthYear = 1997;
let favFood = 'pizza';


console.log(me + " is a great guy, his favorite color is " + favColor,
    "and his favorite food is " + favFood + ". He lives in Apt number " +
    aptNum + " he was born in " + birthYear + " and his favorite number is " +
    favNumber)
console.log("Favorite number is " + favNumber + " my apt number is " +
    aptNum + "and my birth year is " + birthYear + " My name is " + me +
    "my favorite food is " + favFood + " and my favorite color is " + favColor
)

console.log(aptNum + favNumber + birthYear)
console.log(favNumber += 7)
console.log(favNumber *= 13)
console.log(favNumber /= 6)


let myName = 'John';
let myAddress = 'ValleyBrooke';
let myAge = '22'
let myBirthday = 'Septemeber 19th';
var dob = new Date('sept 19 1997');



let today = Date.now();
let numofsecs = today - dob;

var seconds = dob.getSeconds();


console.log("My name is " + myName + ' from ' + myAddress + " who is " + myAge + " years old and my birthday is in " + myBirthday)
console.log(365 * 24 * 3600)
console.log(numofsecs)

var strJ = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed."

console.log(strJ.indexOf("Government"))
let start = strJ.indexOf("all")
let end = strJ.indexOf(",", start)
let newthat = strJ.replace(/taht/gi, 'that')
let length = strJ.length
console.log(newthat)
console.log(strJ.substring(start, end));
console.log(strJ.indexOf("all"))
console.log(length)


let studentName = []; //  Boom! that's it. you now have an array. It has 0 elements
studentName[199] = 'hello'; //  This just made your array 200 elements long
let moreStudents = new Array(200); //  Now you have an array with 200 undefined elements

studentName[149] = "E. T. Academy";
studentName[0] = "Ima Student";


let len = studentName.length
studentName[studentName.length - 1] = "Zeke Zamboni"; // always the last name called in class
//        JS uses square brackets to define arrays.

let cableTVShows = []; // here is how we create an empty array
//        let's create arrays with some initial values
let tvShows = ['MASH', 'NCIS', 'Star Trek', 'Big Bang Theory'];
let testScores = [100, 88, 47, 98, 32, 79];

console.log(tvShows[0]); // Prints 'Mash' to the console
console.log(tvShows[2]); // not a surprise this prints 'Star Trek'
console.log(tvShows[tvShows.length - 1]); // This the last entry ''Big Bang Theory'
console.log(tvShows[8]); // you show already know that this prints undefined
tvShows[8] = 'Friends'; // What do you think this will do? 
console.log(tvShows[8]); // Any guesses what this will print out? 

tvShows.push('The Flash'); // This will add our new entry at the end of the array
tvShows.push('The Expanse');
tvShows.push('Friday Night Lights');
tvShows.push('Dr. Who');
tvShows.push('Designated Survivor');
tvShows.push('Mickey Mouse Club');
console.log(tvShows[tvShows.length - 1]); // This the last entry


(tallestChild(10,20,15))


function tallestChild(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    }  
    else if (num2 > num3) {

        console.log(num2)
    } 
   else   {
        console.log(num3)
    }



}