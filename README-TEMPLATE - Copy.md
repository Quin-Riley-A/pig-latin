# (TITLE)

## Authored by: 
Day 1: Najma Abdi, Quin Asselin, Hans Ellis (2022)
Day 2: Emil Anton, Quin Asselin, Noah Cowan (2022)

***


## Table of Contents
1. [Repository Description](#description)
2. [Github Pages Information](#pages)
3. [Technologies Used](#tech)
4. [Setup Instructions](#setup)
5. [Example Tests](#tests)
6. [Known Bugs](#bugs)
7. [License Information](#license)
8. [Photo Licensure](#photo)

*** 

### Repository Description: {#description}
This application asks the user a series of questions to suggest potentially suitable coding languages for new developers who are looking for suggestions.

This project was hand-built in tandem with a programming class taught by Epicodus. It contains use of {LANGUAGES} JavaScript, HTML, and formatting from both custom CSS and Bootstrap. 

***

### Github Pages: {#pages}
This project can be accessed on Github Pages via this [link](INSERT LINK HERE)


***

### Technologies Used: {#tech}
- Javascript
- HTML5
- CSS3
- Markdown Text
- Bootstrap 4.6.2
- Git
- Github and Github Pages

***

### Setup Instructions: {#setup}
This webpage can be access by following the Github Pages linked [above](#pages)

Alternatively, the project can be opened via cloning/downloading repository:
1. Download this repository from its Github Repository.
2. Locate the download destination folder on your local machine.
3. Unzip the downloaded folder if necessary.
4. Enter the decompressed folder and open "index.html" in your prefered web browser.

(ADD STEPS ABOUT VERIFYING PROJECT IS SET UP CORRECTLY)
***

### Tests: {#tests}
TESTING INFO
##### Describe: vowelCounter()
**Test 1:** 
*"It ignores non-alphabetical characters since they can't be vowels."*

***Code:***
```javascript
vowelCounter("*&$92%");
```
***Expected Output:***
0

**Test 2**
*'It recognizes a single vowel"*

***Code:***
```javascript
vowelCounter("a");
```
***Expected Output:***
1

**Test 3**
*'It recognizes a single vowel regardless of case.'*
```javascript
Code: vowelCounter("A");
```
***Expected Output:*** 
1

**Test 4**
*'It recognizes a single vowel in a word with multiple characters.'*
***Code:***
```javascript
vowelCounter:("cat");
```
***Expectied Output:***
1

**Test 5**
*'It recognizes multiple vowels in a sungle word.'*
***Code***
```javascript
vowelCounter:("cater");
```
***Expected Output***
2

**Test 6:** 
*"It recognizes vowels in a multiple word sentence regardless of capitalization."*

***Code:***
```javascript
vowelCounter("CATS CATERED THE EVENT");
```
***Expected Output:***
7

**Test 7:**
*"It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."*

***Code:***
```javascript
vowelCounter("CaTS CATEReD ThE EveNT");
```
***Expected Output:***
7

**Test 8:**
*"It recognizes vowels in a multiple-word sentence."*

***Code:***
```javascript
vowelCounter("cats catered the event");
```
***Expected Output:***
7




## End Example
***

### Known Bugs: {#bugs}
In the event that (disallowed values) are entered into [MORE INFO] If you experience this issue, please message the producer of your current repository and include any relevant form/page information. Thank you for your patience as I work on any issues!

The page may experience formatting issues when opened on mobile devices or tablets/laptops in smaller windows. Page should still be legible but general project layout will shift in potentially unforeseen manner. Thus, it is recommended to open the HTML index page in browser or file explorer in as full a screen as hardware allows.

Additionally, included image does not scale-down to fit to smaller screen sizes and may take up a majority of the screen when scrolling through the site from a mobile (or other small-screened) device.

***

### License Information {#license}
*Quin Asselin, 2022. Available for distribution, modification, inspection, and application under [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)*

#### Photo Licensure {#photo}
Photo sourcing and respective licenses are as follows:
- [The Python Logo Device](https://www.python.org/community/logos/)
  * Used under clause of indicating suitability of Python.
- [C++](https://isocpp.org/home/terms-of-use)
  * Used under clause allowing for use in conjunction with educational material.
- [Javascript](https://commons.wikimedia.org/wiki/File:JavaScript-logo.png)
  * Used under permission granted by MIT License [here.](https://github.com/voodootikigod/logo.js/blob/master/LICENSE)
- [Ruby](https://www.ruby-lang.org/en/about/logo/)
  * Used under the terms of [Creative Commons Attribution-ShareAlike 2.5 License](https://creativecommons.org/licenses/by-sa/2.5/) produced by Yukihiro Matsumoto, Copyright ?? 2006.

*All photos are used with permission from their respective owners.*