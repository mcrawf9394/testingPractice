const Capitalization = require('./Capitalization');
test('Checks Capitalization', () =>{
    expect(Capitalization("Sam")).toBe(true)
})
const reverseString = require('./reverseString')
test('Reverses a string', () => {
    expect(reverseString("Sam")).toBe("maS")
})
const calculator = require('./calculator')
test('Preforms addition', () => {
    expect(calculator.addition(3, 3)).toBe(6)
})
test('Preforms subtraction', () => {
    expect(calculator.subtraction(3, 3)).toBe(0)
})
test('Preforms multiplication', () => {
    expect(calculator.multiplication(3, 3)).toBe(9)
})
test('Preforms division', () => {
    expect(calculator.division(3, 3)).toBe(1)
})
const caesarCipher = require('./caesarCipher')
test('encrypts string using caesar cipher', () => {
    expect(caesarCipher(-5, "Sam!")).toBe("Nvh!")
})
const analyzeArray = require('./analyzeArray')
test('Takes an array and gives back an average, min, max, and length of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})