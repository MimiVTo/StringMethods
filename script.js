/* 
    INSTRUCTIONS / TO DO
        slice( ): Returns a piece of a string
        replace( ):Replaces the first instance of a matching character in a string
        replaceAll( ): Replaces all instances of a matching character in a string
        concat( ): Merges two strings together (DONE)
        charAt( ): Lets you access a character from a string (DONE)
*/

// Slice --------------------------------------------

var slicedWord = "slicedWord";

function slice(num1, num2){

}

// Replace ------------------------------------------

var replaceWordEx = "I like yellow";

function replace(word, wordReplacing){

}

// ReplaceAll ---------------------------------------

var replaceThisWord = "Minecraft is cool";

function replaceAll(word, wordThatWillReplace){
    
}

// Concat -------------------------------------------

var firstName = "Mimi";
var lastName = "To";

function concat(word1, word2){

    firstName = firstName+lastName;

    console.log(firstName);

}

// CharAt -------------------------------------------

var charAtWord = "Gold";

function charAt(word, num){

    for (var i = 0; i< word.length; i++){
        if (i === num){
            console.log(word[i]);
        }
    }

}

// Calls to function ---------------------------------


concat(firstName, lastName);
charAt(charAtWord, 2);