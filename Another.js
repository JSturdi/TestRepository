function hello(person) {
    let temp = "Hello " + person + "!";
    return temp;
}

let msg = hello('John');
console.log(msg);


//let todayPlus1 = getTomorrow();
// console.log(todayPlus1);

// function getTomorrow() {
// let today = new Date();
// today.setDate(today.getDate()+1);
// let strTomorrow = today.getMonth()+1 + "-" + 
//                  today.getDate() + "-" + 
//                today.getFullYear()

// return strTomorrow;
// }



let curSeconds;
curSeconds = getSeconds();
console.log("Current Seconds " + curSeconds);

function getSeconds() {
    let date = new Date();
    let seconds = date.getSeconds();


    return seconds;
}

let curMinutes
curMinutes = getMinutes()
console.log("Current Minutes " + curMinutes);

function getMinutes() {

    let date = new Date();
    let minutes = date.getMinutes();
    return minutes;
}

let curHours
curHours = getHours()
console.log("Current Hours " + curHours);

function getHours() {

    let date = new Date();
    let hours = date.getHours();
    return hours;
}
console.log("The current time is " + curHours + ':' + curMinutes + ':' + curSeconds)

let string
let strConverter = 'Hey look at me I can change from upper case to lower case'
string = StringConverter(strConverter)
console.log(string)

function StringConverter(string) {


    let seconds = getSeconds()

    if (seconds < 30) {
        string = string.toUpperCase()
    } else {
        string = string.toLowerCase()
    }

    return string;

}

console.log(MilitaryCalls('A') + " " + MilitaryCalls('B'))

function MilitaryCalls(letter) {
    let outMsg;
    switch (letter) {
        case 'A':
            outMsg = 'Alpha';
            break;
        case 'B':
            outMsg = 'Bravo';
            break;
        case 'C':
            outMsg = 'Charlie';
            break;
        case 'D':
            outMsg = 'Delta';
            break;
        case 'E':
            outMsg = 'Echo';
            break;
        case 'F':
            outMsg = 'Foxtrot';
            break;
        case 'G':
            outMsg = 'Golf';
            break;
        case 'H':
            outMsg = 'Hotel';
            break;
        case 'I':
            outMsg = 'India';
            break;
        case 'J':
            outMsg = 'Juliett';
            break;
        case 'K':
            outMsg = 'Kilo';
            break;
        case 'L':
            outMsg = 'Lima';
            break;
        case 'M':
            outMsg = 'Mike';
            break;
        case 'N':
            outMsg = 'November';
            break;
        case 'O':
            outMsg = 'Oscar';
            break;
        case 'P':
            outMsg = 'Papa';
            break;
        case 'Q':
            outMsg = 'Quebec';
            break;
        case 'R':
            outMsg = 'Romeo';
            break;
        case 'S':
            outMsg = 'Sierra';
            break;
        case 'T':
            outMsg = 'Tango';
            break;
        case 'U':
            outMsg = 'Uniform';
            break;
        case 'V':
            outMsg = 'Victor';
            break;
        case 'W':
            outMsg = 'Whiskey';
            break;
        case 'X':
            outMsg = 'X - ray';
            break;
        case 'Y':
            outMsg = 'Yankee';
            break;
        case 'Z':
            outMsg = 'Zulu';
            break;



    }
    return outMsg;
}

let a = 5;
let b = 7;
let c = 7;

// sum = AddThreeNumbers(a,b,c);
// console.log(sum)



 function AddThreeNumbers(n1,n2,n3) {

let answer;

// answer = n1+n2+n3;

return answer;
}

let cnt = Loopeyloop(6);
console.log('It has went through the loop ' + cnt + ' times.')

function Loopeyloop(jump) {
    let date = new Date();
    let hour = date.getHours();
    count = 0;
    
    let seconds = date.getSeconds();
    
    for (let i = hour; i < seconds; i+=jump) {
        console.log(i)
        
        count++;
        
    }
     
    return count;
}