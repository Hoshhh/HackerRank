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