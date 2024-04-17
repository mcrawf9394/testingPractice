function caesarCipher (shiftAmount, string) {
    let tempString = string.toLowerCase()
    let originalArray = tempString.split("")
    let newArray = []
    originalArray.forEach(character => {
        let code = character.charCodeAt(0)
        if (code >= 33 && code < 65) {
            
        }
        else if (code + shiftAmount < 97) {
            code = code + shiftAmount +26
        }
        else if (code + shiftAmount > 122) {
            code = code + shiftAmount - 26
        }
        else {
            code = code + shiftAmount
        }
        newArray.push(code)
    });
    let i = 0
    let tempArray = string.split("")
    while (i < newArray.length) {
        newArray[i] = String.fromCharCode(newArray[i])
        if (tempArray[i] === tempArray[i].toUpperCase()) {
            newArray[i] = newArray[i].toUpperCase()
        }
        i = i + 1
    }
    return newArray.join("")
}
module.exports = caesarCipher