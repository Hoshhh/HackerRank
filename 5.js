arr = [1,2,3,4,3,2,1]

function lonelyinteger(a) {
    let result = a.filter((num) => {
        return a.indexOf(num) === a.lastIndexOf(num)
    })

    console.log(result[0])
}

lonelyinteger(arr)