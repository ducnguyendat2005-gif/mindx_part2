function sorties(arr) {
    for (let i of arr){
        for (let j of arr){
            console.log(i);
            console.log(j);
        }
    }
}
console.log(sorties([3,1,4,5]));