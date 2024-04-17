function reverseString (string) {
    let length = string.length
    let i = 0
    let array = string.split("")
    let newArray = []
    while (i < length) {
        newArray.unshift(array.shift())
        i++
    }
    let newString = newArray.join("")
    return newString
}
module.exports = reverseString