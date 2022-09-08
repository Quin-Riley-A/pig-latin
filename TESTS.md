### Tests: {#tests}
##### Describe: vowelCounter()
**Test 1:** 
*"It ignores non-alphabetical characters since they can't be vowels."*

***Code:***
```javascript
vowelCounter("*&$92%");
```
***Expected Output:***
0






Describe: pigLatin(words starting with vowels)

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

test: "it will identify vowels"
Code: pigLatin("a");
Expected output: true


Describe: pigLatin(words starting with consonents)

Test: "put input words into an array"
code: pigLatin("bike")
expected output: [b, i, k, e]

test: "put first consonents at the end of a word"
code: pigLatin("bike")
expected output: [i, k, e, b]