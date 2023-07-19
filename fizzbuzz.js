module.exports = function() {
    // first create a variable with an emty array
    //Write a program to return arrays of number from 1 - 100
    //then check the reminder of 3 and 5 if there is any
    let array = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push('FizzBuzz');
        } else if (i % 3 === 0) {
            array.push('Fizz');
        } else if (i % 5 === 0) {
            array.push('Buzz');
        } else {
            array.push(i);
        }
    }

    return array;
}