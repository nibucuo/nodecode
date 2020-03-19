function censor(inStr){
    for (const key in censoredWords) {
        inStr = inStr.replace(censoredWords[key], '****')
    }
    for (const key in customerCensoredWords) {
        inStr = inStr.replace(customerCensoredWords[key], '****')
    }
    return inStr
}
function addCensoredWord(word){
    customerCensoredWords.push(word)
}
function getCensoredWords(){
    return censoredWords.concat(customerCensoredWords)
}
exports.censor = censor
exports.addCensoredWord = addCensoredWord
exports.getCensoredWords = getCensoredWords