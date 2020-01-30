// let names = [];
//names.push("A");
//names.push("B");
//names.push("C");
//names.push("D");
//names.push("E");
//names.push("F");
//console.log(names)

//let middle = names.slice(2,5);

// let middle = names.splice(2,2);
//console.log(names);
//console.log(middle);
//let whereIsA= names.indexOf('A');
//console.log(whereIsA);

var ages = [32, 12, 33, 16, 15, 40, 80, 55, 11, 6];
//console.log(ages.reduce( (total, age) => total + age));

let newArray = ages.filter(checkAdult)
//console.log("ages > 18 " + newArray);


newArray = ages.filter(age => age >= 35);
//console.log("ages > 35 " + newArray);
//console.log('There ' + newArray.length + " people over 35")
//console.log(newArray.pop());

newArray = ages.some(age => (age > 6));
// console.log("Every age > 6 " + newArray);

let num = ages.find(age => (age > 32));
// console.log("first age > 32 : " + num);

function checkAdult(age) {

    return age <= 18;
}

let names = ['Liya', 'Rain', 'Lindsey', 'Peyton', 'Jarvis', 'Alexis', 'Julius', 'John'];
newArray = names.filter(name => name.charAt(1) == ('a'));



// console.log(newArray.join("/"));

let arZ = [10, 32, 23, 47, 53, 79, 21, 35, 30, 28, 9, 15, 18, 97, 46, 88, 5, 102, 108, 120, 43];
let totalOld = 0;
let totalReduce = arZ.reduce((total, nextNum) => total + nextNum );

for (let i = 0; i < arZ.length; i++) {

    totalOld += arZ[i]; 

    if (arZ[i] > 10){
        console.log('Position ' + i + " : " + arZ[i] + ' is greater than 10'); 
    }
    if (arZ[i] % 2 == 0){

        console.log('Numbers that can be divided by 2 : ' + arZ[i]) 
    }

}

total = 0;
for (const num of arZ) {
    if (num < total / arZ.length)
        console.log(num + 'is < the average');

}