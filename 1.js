//Plus Minus - HackerRank
const array1 = [1,1,0,-1,-1]

function plusMinus(arr) {
    //Each will take in an array and filter the pos, neg, or 0 values in an array then return an array
    //Each new array will have a length of however many pos, neg, or zero values (positive.length will be 2, etc)
    //Each length is then divided by the total arr length to get the percentage of pos, neg, and zero values in the arr
    let positive = arr.filter(num => num > 0).length / arr.length
    let negative = arr.filter(num => num < 0).length / arr. length
    let zero = arr.filter(num => num === 0).length / arr. length
    console.log(positive + '\n' + negative + '\n' + zero)
}
plusMinus(array1)