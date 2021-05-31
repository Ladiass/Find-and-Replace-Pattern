let findAndReplacePattern = function (words, pattern) {
    let ans = [];
    let toAry = pattern.split("")
    let style = []
    for (let x = 0; x < toAry.length; x++) {
        if (toAry[x] == toAry[x - 1]) { style[x - 1] += 1 } else { style.push(1) }
    }
    let wordsStyle = [];
    words.map(words => {
        let wordsSinStyle = [];
        let toAry = words.split("")
        for (let x = 0; x < toAry.length; x++) {
            if (toAry[x] == toAry[x - 1]) { wordsSinStyle[x - 1] += 1 } else { wordsSinStyle.push(1) }
        }
        wordsStyle.push(wordsSinStyle)
    })
    wordsStyle.filter(wStyle => {
        if (wStyle.toString() == style.toString()) ans.push(wStyle)
    })
    console.log(ans)
};
findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")