import {findMin,countWords,sumbyKey,sortStringsByLength,convertToArray,getAdults
    ,groupByFirstLetter,filterByMinValue,intersection,uniqueValues,sumByGroup,hasDuplicate,
    countElements
} from "./utils.js"

console.log(findMin({ a: 100, b: 20, c: 50 }));

console.log(countWords("Hello world! Welcome to JavaScript"));

console.log((sumbyKey([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
],'price')));

console.log(sortStringsByLength(['a', 'ccc', 'bb']));

console.log(convertToArray({ a: 1, b: 2, c: 3 }));

console.log(getAdults([
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
],18));

console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));

console.log(filterByMinValue([5, 10, 15, 20],12));

console.log(intersection([1, 2, 3],[2, 3, 4]));

console.log((uniqueValues([1, 2, 3],[3, 4, 5])));

console.log(sumByGroup([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }])
);

console.log(hasDuplicate([1, 2, 3, 4, 2]))

console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a']));






