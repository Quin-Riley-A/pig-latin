function pigLatinVowel(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word.charAt(0)))
  return word.concat("way");
}

function pigLatinConsonant(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let n = true;
  let index = 0;
  let slicedLetters = [];
  while (n) {
    if (!(vowels.includes(word.charAt(index)))) {
      slicedLetters.push(word.charAt(index));
      index += 1;
      continue;
    }
    word = word.slice(index, word.length);
    if (slicedLetters[0] === "q") {
      slicedLetters.push(word.charAt(0));
      word = word.slice(1,word.length);
    } else if (slicedLetters[-1] === "q" && slicedLetters[0] !== "q") {
      slicedLetters.pop();
      word = "q" + word + slicedLetters.join("")+"ay";
      return word;
    }

    return word.concat(slicedLetters.join("")+ "ay"); 
  }
}