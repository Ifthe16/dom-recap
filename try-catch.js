const day = 'day the din';
console.log(day);
console.log(25);
// console.log(district);
// let district = 'bBaria';
console.log(100);
console.log(100);
console.log(100);

try {
    console.log('inside try');
    // console.log(student);
    console.log(district);
    let district = 'bBaria';
    console.log('after error')
}
catch (error) {
    console.log('inside catch')
    // console.log(error);
}
finally {
    console.log('finally done')
}
console.log('last line of the code')

// example 02
try {
    let x = 5;
    let y = x / 0;
    // console.log(y);
}
catch (error) {
    console.log('error:', error.message);
    // console.log(error);
}
finally {
    console.log('work done!');
}

// example 03

function checkAge(age) {
    if (age < 18) {
        throw "Age is less than 18";
    }
    return "You are eligible!";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log("Error:", error);
}
finally {
    console.log("Check completed.");
}
