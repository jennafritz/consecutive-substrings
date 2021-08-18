function consecutiveSubstrings(string) {
  // type your code here

  if(string.length <= 1){
    return [...string]
  }

  let substringArray = []

  let stringArray = string.split('')

  stringArray.forEach((element, index) => {
    substringArray.push(element)
    for(i = index + 1; i < stringArray.length; i++){
      let substring = string.substring(index, i + 1)
      substringArray.push(substring)
    }
  })

  return substringArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("Expecting: ['t', 'te', 'tes', 'test', 'e', 'es', 'est', 's', 'st', 't']");
  console.log("=>", consecutiveSubstrings('test'));

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
  // if string length less than or equal to one
    // convert string to array and return
  // initialize empty array for substrings
  // split string into array
  // for each letter in the stringArray
    // push letter to array
    // for i < string length
      // iterate through following letters
        // get substring from letter to letter[n + i] and push to array
  // return array

// And a written explanation of your solution
