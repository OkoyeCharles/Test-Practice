//--- Task 1 : Takes in a string and returns its character count ---
const stringLength = (string) => {
  if (!string.length) return 'string should have letters'
  return string?.length <= 10 ? string.length : 'string should be less than or equal to 10'
}

module.exports = stringLength;


