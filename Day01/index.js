import {ppname,stringLength,toUpperCase,formatCurrency,max,isPrime,repeatString,sumOdd,
    sumGreaterThan,separateEvenOdd,factorial,
    sortAsc,sumEvenIndex
} from "./utils.js"

const people = [{ name1: "And" }, { name2: "Bình" }];
console.log(ppname(people));

console.log(stringLength("Hello World"));

console.log(toUpperCase("javascript"));

console.log(formatCurrency(1000000));

console.log(max([10, 5, 20, 8]));

console.log(isPrime(13));

console.log(repeatString("Hello", 3));

console.log(sumOdd([1, 2, 3, 4]));

console.log(sumGreaterThan([1, 2, 3, 4], 2));

console.log(separateEvenOdd([1, 2, 3, 4]));

console.log(factorial(5));

console.log(sortAsc([3, 1, 4, 2]));

console.log(sumEvenIndex([1, 2, 3, 4]));

console.log(countOccurrences([1, 2, 2, 3, 2], 2));