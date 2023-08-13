function utopianTree(n) {
    var utopianHeight = 1
    //console.log("1 : " + utopianHeigth)
    var utopianObj = { "0" : 1 }
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            utopianHeight = utopianHeight * 2
        } else {
            utopianHeight = utopianHeight + 1
        }
        console.log(i + " : " + utopianHeight)
        utopianObj[i] = utopianHeight;
    }
    return utopianObj[n]
}

var n = 21
console.log(utopianTree(n))