// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

        var word = $("#input").val();
        
    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {

        
        var first = word.charAt(0);
        
        if(first === "a"){
            return true;
        } else if(first === "e"){
            return true;
        } else if(first === "i"){
            return true;
        } else if(first === "o"){
            return true;
        } else if(first === "u"){
            return true;
        } else {
            return false;
        }
    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        if(word === true){
            word + "yay";
            return word;
        }
    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
        if(word === false){
         var firstC = word.charAt(0);
         
         word + firstC;
         return word;
            
        }
    }

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
        if(word === false){
        word + "ay";
        return word;
        } else {
            appendYayToWord(word);
            return word;
        }
    }

    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
        $("#translate").click(function(){
           wordStartsWithVowel(word);
           appendYayToWord(word);
           convertWordWithConsonant(word);
           convertWordToPigLatin(word);
           $("#final").append(word);
        });
});
