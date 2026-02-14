const findMin = (obj) =>{
    const toArr = Object.entries(obj)
    const maxx = toArr.find(([key,value]) => {
        const maxValue = Math.min(...Object.values(obj))
        return value === maxValue
    })[0]

    return maxx
}

const countWords = (str) => {
    let count = 0
    for (let ch of str) {
        if (ch === " ") count++
    }
    return count+1
}

const sumbyKey = (arr,key) => {
    let sum=0;
    for (let i of arr){
        sum += i[key];
    }
    return sum
}

const sortStringsByLength = (arr) => {
    return arr.sort((a,b) => a.length-b.length)
}

const convertToArray = (obj) => {
    return Object.entries(obj)
}

const getAdults = (arr,setAge) => {
    let rs = [];
    for (let i of arr){
        if (i.age >= [setAge]) {
            rs.push(i)
        }
    }
    return rs
}

const groupByFirstLetter = (arr) => {
    let rs={}
    for (let i of arr){
        if (rs[i[0]]){
                rs[i[0]].push(i)
            } else{
                rs[i[0]] = [i]
            }
        }
    return rs
}

const filterByMinValue = (arr, minValue) => {
    let rs = []
    for(let i of arr) {
        if (i > minValue){
            rs.push(i)
        }
    }
    return rs
}

const intersection = (arr1,arr2) => {
    let rs = []
    for (let i of arr1){
        for (let j of arr2){
            if (i === j){
                rs.push(i)
            }
        }
    }
    return rs
}

const uniqueValues = (arr1,arr2) => {
    const arr = [...arr1,...arr2]
    let rs = [];
    for (let i of arr){
        if (!rs.includes(i)){
            rs.push(i)
        }
    }
    return rs
}

const sumByGroup = (arr) => {
    let rs = {};
    for (let i of arr){
        if (rs[i.type]){
            rs[i.type] += i.price
        }else {
            rs[i.type] = i.price
        }
    }
    return rs
}

const hasDuplicate = (arr) => {
    for (let i=0; i< arr.length;i++) {
        for (let j=0;j < arr.length;j++){
            if (i === j){
                continue
            }
            if (arr[i]===arr[j]){
                return true
            }
        }
    }
    return false
}

const countElements = (arr) =>{
    let rs = {}
    for (let i of arr){
        if (rs[i]){
            rs[i] = rs[i] + 1
        }
        else{
            rs[i] = 1
        }
    }
    return rs
}
export {findMin,countWords,sumbyKey,sortStringsByLength,convertToArray,getAdults,groupByFirstLetter,filterByMinValue
    ,intersection,uniqueValues,sumByGroup,hasDuplicate,countElements
}