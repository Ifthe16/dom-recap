// match()
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
console.log(text.match(/ain/gi));

const textIdentify = text.match('ain');
console.log(textIdentify);

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log(text2.match(/ain/));

const text3 = "I love programming"
const result = text3.match(/programming/);
console.log(result);

const text4 = "I love programming and I am learning Programming and PROGRAMMING";
const result2 = text4.match(/programming/g);
console.log(result2);

const text5 = "JavaScript is great, I love JAVASCRIPT!";
const result3 = text5.match(/javascript/gi);
console.log(result3);
const result4 = text5.match(/javascript/i);
console.log(result4);

let text6 = "The rain in SPAIN stays mainly in the plain";
const result5 = text.match(/(?<vowel>ain)/);
console.log(result5.groups);
console.log(result5);
