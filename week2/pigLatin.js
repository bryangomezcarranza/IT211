/*
Pig Latin Translator Script
Author: Bryan Gomez
Date: July 6th, 2023

Create a function that translate users text and gives you a output. 
  - Handle empty string 
  - Create 3 constant one for the vowels, one sentence or word, and and one for the result. 

Iterate through each word in the sentence 
- if word has any alphabetic characters 
  - Make all words in the sentense lowerdcase 
- if word starts with any vowels 
  - find the consonant cluster at the beginning of the word
  - then move the consonant cluster to the end of the word and add "ay"
- for default, preserve non-alphabetic characters

Next, join the translated words into sentences 

In order for all this to work make sure to add an event listener for when the user clicks the button 

*/


// Function to translate a word to Pig Latin
function translatePigLatin(str) {
  // Handles error for empty string
  if (str.trim() == "") {
    return "Error: please enter a word to translate.";
  }

  // Array of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Split the sentence into an array of words
  const sentence = str.split(/\b/);
  // Create an Empty Array for the new words
  const result = [];

  // Iterate through each word in the sentence
  for (let word of sentence) {
    // Check if the word contains any alphabetic characters
    if (word.match(/\w/)) {
      // Make every word to lowercase
      const firstLetter = word[0].toLowerCase();

      // Check if the word starts with a vowel
      if (vowels.includes(firstLetter)) {
        result.push(word + "way");
      } else {
        // Find the consonant cluster at the beginning of the word
        const match = word.match(/^[^aeiouy]+/i);
        if (match) {
          const consonants = match[0];
          // Move the consonant cluster to the end of the word and add "ay"
          result.push(word.slice(consonants.length) + consonants.toLowerCase() + "ay");
        }
      }
    } else {
      // Preserve non-alphabetic characters
      result.push(word);
    }
  }

  // Join the translated words into a sentence
  return result.join("");
}

// Event listener for the Translate button
document.getElementById('tButton').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  outputText.value = translatePigLatin(inputText);
});
