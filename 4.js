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

matchingStrings(str,qry)