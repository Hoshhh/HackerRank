//Test arrays
var str = ['def', 'de', 'fgh']
var qry = ['de', 'lmn', 'fgh']

function matchingStrings(strings, queries) {
    let result = []
    //Loop through the queries
    for(let i=0; i < queries.length; i++) {
        //Filter through the string array using the current iteration of the query array
        const q1 = strings.filter( string => {
            return string === queries[i]
        })
        //Push the length of the q1 array to represent the number of results found that matched the queries array search
        result.push(q1.length)
    }  
    console.log(result)
}

//matchingStrings(str,qry)


//Alternative Solution
function altMatching(strings, queries) {
    let result = []
    //Loop through each query, within each query, filter the strings array based on if the string matches the query
    //If string matches query, add it to search. If it doesn't, you will get an empty array.
    //Get the length of each array. If the array is empty, it will return 0. Push these values to a new result array.
    queries.forEach((query) => {
        const search = strings.filter((string) => string === query).length
        result.push(search)
    })
    console.log(result)
}

altMatching(str,qry)