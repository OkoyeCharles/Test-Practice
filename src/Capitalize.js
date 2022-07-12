// --- Task 4 : Takes a string and returns that string with the first character capitalized. ---
const capitalize = (string) => {
  if (!string || !string.length) return
  let arr = string?.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

module.exports = capitalize;