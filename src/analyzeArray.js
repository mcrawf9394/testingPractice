class object {
   constructor (average, min, max, length) {
      this.average = average
      this.min = min
      this.max = max
      this.length = length
   }
}
function analyzeArray (array) {
   let arraySum = array.reduce((sum, currentNum) => sum + currentNum, 0)
   let average = arraySum / array.length
   let i = 1
   let min = array[0]
   while (i < array.length) {
      if (array[i] < min) {
         min = array[i]
      }
      i++
   }
   i = 1
   let max = array[0]
   while (i < array.length) {
      if (array[i] > max) {
         max = array[i]
      }
      i++
   }
   let length = array.length
   return new object (average, min, max, length)
}
module.exports = analyzeArray