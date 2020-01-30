let arString = ['Cat', 'Mouse', 'Animals', 'Buffet', 'Lemonade', 'Sprite', 'Google', 'Yahoo', 'Bing', 'TarrantCounty'];
console.log(arString)

for (let i = 0; i < arString.length; i++) {
    if (arString[i].length > 8) {
        console.log(arString[i] + ' is the only one that is greater than 8.')
    }

    if (arString[i].includes('o')) {
        console.log(arString[i] + ' is a string that contain the letter O.')
    }
    if (arString[i].startsWith('B')) {


        console.log(arString[i] + ' is a string that starts with the letter B.')
    }

    if (arString[i].length > 7 && arString[i].endsWith('e')) {

        console.log(arString[i] + ' is longer than 7 characters and ends with the letter E.')
    }
}
let var1 = arString.pop()
let var2 = arString.pop()
let var3 = arString.pop();
console.log(arString)
arString.unshift(var1,var2,var3)
console.log(arString)

let middle = arString.length/2;
middle = Math.round(middle)
arString.splice(middle,1);
console.log(arString)

let sumOfCharacters = 0;
let str = "".concat(arString)

console.log(str.length - arString.length + ' characters in the string.')














