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
//plusMinus(array1)


//Mini-Max Sum - HackerRank
//Test array
const array2 = [1,3,2,5,4]
function miniMaxSum(arr) {
    //Sort the minArr from lowest to highest value and maxArr from highest to lowest
    const minArr = [...arr].sort((x,y) => x - y)
    const maxArr = [...arr].sort((x,y) => y - x)
    let minSum = 0
    let maxSum = 0

    //Loop through one less of the array length so you get the lowest 4 values since minArr was rearranged from lowest to highest
    for(let i = 0; i < minArr.length-1; i++) {
        minSum += minArr[i]
    }

    //Loop through one less of the array length so you get the highest 4 values since minArr was rearranged from highest to lowest
    for(let i = 0; i < maxArr.length-1; i++) {
        maxSum += maxArr[i]
    }

    console.log(minSum + " " + maxSum)
}
miniMaxSum(array2)