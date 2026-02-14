
// arr = ['apple', 'banana', 'avocado', 'blueberry']
// let rs={}
// for (let i of arr){
//     if (rs[i[0]]){
//         rs[i[0]].push(i)
//     } else{
//         rs[i[0]] = [i]
//     }
// }

// console.log(i,obj[i]); 

// const arr = [5, 10, 15, 20]
// const minValue = 12;
// let rs = []
// for(let i of arr) {
//     if (i > minValue){
//         rs.push(i)
//     }
// }
// console.log(rs);
 
// const arr1 = [1, 2, 3]
// const arr2 = [2, 3, 4]
// let rs = []
// for (let i of arr1){
//     for (let j of arr2){
//         if (i === j){
//             rs.push(i)
//         }
//     }
// }
// console.log(rs);


// const obj = { a: 100, b: 20, c: 50 }
// let data = [];
// for (let key in obj){
//     data.push(obj[key])
// }
// const min = Math.min(...data)

// for (let key in obj) {
//     if(obj[key] === min){
//         console.log(key);
//     }
// }

// const uniqueValues = (arr1,arr2) => {
//     const arr = [...arr1,...arr2]
//     let rs = [];
//     for (let i of arr){
//         if (!rs.includes(i)){
//             rs.push(i)
//         }
//     }
//     return rs
// }
// console.log(uniqueValues([1, 2, 3],[3, 4, 5]));

// const arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// let rs = {};
// for (let i of arr){
//     if (rs[i.type]){
//         rs[i.type] += i.price
//     }else {
//         rs[i.type] = i.price
//     }
// }
// console.log(rs);
// arr = [1, 2, 3, 4]
// function dup(arr) {
//     for (let i=0; i< arr.length;i++) {
//         for (let j=0;j < arr.length;j++){
//             if (i === j){
//                 continue
//             }
//             if (arr[i]===arr[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(dup(arr));


