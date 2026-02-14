const ppname = (people) =>{
    let strN = ""
    people = Object.assign({},...people)
    for(let key in people){
        strN += people[key] + ","
    }
    return `"${strN.slice(0,-1)}"`
}

const stringLength = (stringLength) => {
    return stringLength.length
}

const toUpperCase = (toUpperCase) => {
    return toUpperCase.toUpperCase()
}

const formatCurrency = (formatCurrency) => {
    return formatCurrency.toLocaleString("vi-VN") + " VNĐ";
}

const max = (arr) => {
    return Math.max(...arr)
}

const isPrime = (isPrime) => {
    for (let i=2;i<isPrime;i++){
        if (isPrime % i === 0){
            return false
        }
    }
    return true
}

const repeatString = (string,count) => {
    let str = ""
    for (let i = 0;i<count;i++){
        str += string + " "
    }
    return `"${str.slice(0,-1)}"`
}

const sumOdd = (arr) => {
    let sum = 0;
    for (let i in arr){
        if (Number(i) % 2 !== 0){
            sum += Number(i)
        }
    }
    return sum
}

const sumGreaterThan = (arr,num) => {
    let sum = 0;
    for (let i in arr){
        if (Number(arr[i]) > num){
            sum += Number(arr[i])
        }
    }
    return sum
}

const separateEvenOdd = (arr) => {
    let odd = []
    let even = []
    for (let i in arr){
        if (Number(arr[i])%2 === 0){
            even.push(Number(arr[i]))
        }
        else {
            odd.push(Number(arr[i]))
        }
    }
    const filtered = {odd:odd,even:even};
    
    return filtered
}

const factorial = (num) => {
    if (num === 0 || num == 1) {
        return 1
    }
    return num * factorial(num - 1);
}

const sortAsc = (arr) => {
    return arr.sort((a,b)=>a-b);
}

const sumEvenIndex = (arr) => {
    let sum = 0;
    for (let i = 0;i <=arr.length-1;i++){
        if (i%2===0){
            sum += arr[i]
        }
    }
    return sum
}


export {ppname,stringLength,toUpperCase,formatCurrency,max,isPrime,repeatString,sumOdd,sumGreaterThan,separateEvenOdd
    ,factorial,sortAsc,sumEvenIndex
}