//Time Conversion - HackerRank

//Test Str
str = "01:58:49PM"

// -12am -> 00
// -1AM to 12PM -> do nothing
// -1PM tp 11PM -> add 12
function timeConversion(s) {
    //Remove the : and put each number into an array
    let arr = s.split(':')

    //If there's an "A" at the 2nd index of the new array then we either combine the array again with ':' 
    //or we reset the hours to 00 if its 12AM
    if (arr[2].charAt(2) === 'A') {
        if (arr[0] === '12') {
            arr[0] = '00'
            //Combines the array back together and removes the AM
            const midnight = arr.join(':').slice(0,8)
            console.log(midnight)
        }
        //Combines the array back together and removes the AM
        const timeAM = arr.join(':').slice(0,8)
        console.log(timeAM)
    } else {
        //If there's not an "A" at the 2nd index of the new array then we either combine if the hour is 12PM
        //or we convert the hours to an integer, add 12, turn it back into a string, and join it back together with ':'
        if (arr[2].charAt(2) === 'P') {
            if (arr[0] === '12') {
                const noon = arr.join(':').slice(0,8)
                console.log(noon)
            } else {
                //Hours into int, add 12, convert to string and now the first index is converted correctly
                arr[0] = (parseInt(arr[0]) + 12).toString()
                //Combines the array back together and removes the PM
                const timePM = arr.join(':').slice(0,8)
                console.log(timePM)
            }
        }
    }
}

timeConversion(str)




//Faster Alternate way I looked up 
function timeConvAlt(s) {
    const arr = s.slice(0,8).split(':');
    //0 index of arr is equal to
    //If the index containing "PM" is greater than -1 then
    arr[0] = (s.indexOf('PM') > -1) ?
        //check if the 0 index of arr is 12, if it is, add 12 else
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        //we are dealing with "AM" and if its 12AM we reset to 00, else we keep arr[0] the same
        (arr[0] == 12 ? '00' : arr[0]);
    //Join the arr with ":"
    const time = arr.join(':');
    console.log(time)
}

//timeConvAlt(str)