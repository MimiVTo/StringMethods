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
        //empty string to hold what is being sliced

    for (var i=num1; i<num2 ; i++){
            //for loop to add words into the variable
        slicedWord += word[i];
    }

    console.log(slicedWord);
}

// Replace ------------------------------------------

// Variables used for the replace functions
var replaceWordEx = "Yellow";
var targetLetter = "l";
var replacementLetter = "m";

function replace(word, target, replacement){

    //variables for this function
    var firstTime = true;
        //checks to see if its the first time that its being replaced
    var newWord = "";
        //empty string to hold the new word

    for (var i=0; i<word.length; i++){
        //for loop to continue putting in letters into the empty string

        if (word[i] === target){

            if(firstTime === true){

                //checks if its the first time, changes only the first targeted letter into the replacement letter
                newWord += replacement;

                firstTime = false;
            }
            else{
                //second letter that is the same does not change into the replacement
                newWord += word[i];
            }

        }
        else{
            //anything that isnt the target word gets put into the empty string
            newWord += word[i];
        }
    }

    console.log(newWord);

}

// ReplaceAll ---------------------------------------

function replaceAll(word, target, replacement){

    var newWord = "";
        //empty string to hold the new word

    for (var i=0; i<word.length; i++){
        if (word[i] === target){
            //changes all targeted letters into the replacement
            newWord += replacement;
        }
        else{
            //second letter that is the same does not change into the replacement
            newWord += word[i];
        }
    }

    console.log(newWord);

}

// Concat -------------------------------------------

var firstName = "Mimi";
var lastName = "To";

function concat(word1, word2){

    //Changes up the first variable to contain both itself and the other one
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