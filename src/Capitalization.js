function Capitalization (name) {
    let nameArray = name.split("")
    let capitalize = nameArray[0]
    if (capitalize === capitalize.toUpperCase()) {
        return true
    }
    else {
        return false
    }
}
module.exports = Capitalization;