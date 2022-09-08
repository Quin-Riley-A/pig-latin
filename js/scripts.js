function pigLatinVowel(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word.charAt(0)))
  return word.concat("way");
}