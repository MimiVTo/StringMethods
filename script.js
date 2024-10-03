/* 
    INSTRUCTIONS / TO DO
        slice( ): Returns a piece of a string (DONE)
        replace( ):Replaces the first instance of a matching character in a string
        replaceAll( ): Replaces all instances of a matching character in a string
        concat( ): Merges two strings together (DONE)
        charAt( ): Lets you access a character from a string (DONE)
*/

// Slice --------------------------------------------

var wordBeingSliced = "slicedWord";

function slice(word, num1, num2){

    var slicedWord = "";

    for (var i=num1; i<num2 ; i++){
        slicedWord += word[i];
    }

    console.log(slicedWord);
}

// Replace ------------------------------------------

var replaceWordEx = "I like yellow";

function replace(word, target, replacement){

}

// ReplaceAll ---------------------------------------

var replaceThisWord = "Minecraft is cool";

function replaceAll(word, target, replacement){

}

// Concat -------------------------------------------

var firstName = "Mimi";
var lastName = "To";

function concat(word1, word2){

    //Changes up the first variable
    firstName = firstName+lastName;
    //Console logs this
    console.log(firstName);

}

// CharAt -------------------------------------------

var charAtWord = "Gold";

function charAt(word, num){

    for (var i = 0; i< word.length; i++){
        // Runs all of the indexes in the string
        if (i === num){
            // If its that index, console log this to show
            console.log(word[i]);
        }
    }

}

// Calls to function ---------------------------------

slice(wordBeingSliced, 3, 6);

concat(firstName, lastName);
charAt(charAtWord, 2);