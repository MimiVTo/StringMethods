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

var replaceWordEx = "Yellow";
var targetLetter = "l";
var replacementLetter = "m";

function replace(word, target, replacement){

    var firstTime = true;
    var newWord = "";

    for (var i=0; i<word.length; i++){
        if (word[i] === target){

            if(firstTime === true){
                newWord += replacement;
                firstTime = false;
            }
            else{
                newWord += word[i];
            }

        }
        else{
            newWord += word[i];
        }
    }

    console.log(newWord);

}

// ReplaceAll ---------------------------------------

function replaceAll(word, target, replacement){

    var newWord = "";

    for (var i=0; i<word.length; i++){
        if (word[i] === target){
            newWord += replacement;
        }
        else{
            newWord += word[i];
        }
    }

    console.log(newWord);

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
replace(replaceWordEx, targetLetter, replacementLetter);
replaceAll(replaceWordEx, targetLetter, replacementLetter);
concat(firstName, lastName);
charAt(charAtWord, 2);