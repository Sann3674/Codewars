function duplicateEncode(word){
  //declare new string and change everything to lower case
  let lowWord = word.toLowerCase();
  //make new string which we can add to (this will be returned at end of function)
  let newWord = '';
  
    //loop through every character in the string
    for (let i = 0; i < word.length; i++) {
      let sameCount = 0;
      //compare each character with every other character (including itself)
      for (let j = 0; j < word.length; j++) {
        if (lowWord[i] === lowWord[j]) {
          sameCount++;
        }
      }
        if (sameCount < 2) {   
          newWord += '(';
        }
        else {
          newWord += ')';
        }
    }
  return newWord;
}
