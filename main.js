function checkNumber(number) {
    if (number % 2 === 0) {
        return 'Even number';
    }
    return 'Odd number';
}
console.log(checkNumber(7));
console.log(checkNumber(10));


function greaterNumber(a, b) {
    if (a > b) {
        return a + ' is greater than ' + b;
    } else if (b > a) {
        return b + ' is greater than ' + a;
    } else {
        return 'Both numbers are equal';
    }
}
var response = greaterNumber(5, 8);
var result = greaterNumber(10, 3);
console.log(response);
alert(response);
console.log(result);
alert(result);

function birthYear(year) {
    const currentYear = 2026;
    var age = currentYear - year;
    return age;
}
console.log(birthYear(1990));

function oddNumbers(num) {
    for (var i =1 ; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
oddNumbers(10);

function sumOfNumbers(num) {
    var sum = 0;
    for (var i =1; i <= num; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));
console.log(sumOfNumbers(10));


