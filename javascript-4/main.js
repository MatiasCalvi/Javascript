/* Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 
32443 then the output should be 34423.
Save your JavaScript file and reload the page. Make sure you see the correct output. If 
not, investigate and fix */

let numberEj1=2345;
console.log(`before: ${numberEj1}`)
function reverse(number){
    return Number(number.toString().split("").reverse().join(""));
}
let numberReverse=reverse(numberEj1);
console.log(`after: ${numberReverse}`);

/* Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For 
example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and 
numbers aren't passed in the string.
Save your JavaScript file and reload the page. Make sure you see the correct output. If 
not, investigate and fix */

let alphabetical="recbdeffwxzaszqwb";
console.log(`before ${alphabetical}`)
function order(phrase){
    return phrase.split("").sort().join("");
}
let alphabeticalOrder=order(alphabetical);
console.log(`after: ${alphabeticalOrder}`);

/* Exercise 3: Write a JavaScript function that converts the first letter of every word to 
uppercase. For example, if x = "prince of persia" then the output should be "Prince Of 
Persia".
Save your JavaScript file and reload the page. Make sure you see the correct output. If 
not, investigate and fix.*/

let phrase="rock and roll";
console.log(`before: ${phrase}`);
let uppercase=phrase.split(" ").map(function(letter){ 
    return letter.charAt(0).toUpperCase()+letter.slice(1);
}).join(" ")
console.log(`after: ${uppercase}`)

/* Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For 
example, if x = "Web Development Tutorial", then the output should be 
"Development".
Save your JavaScript file and reload the page. Make sure you see the correct output. If 
not, investigate and fix. */

let word="Web Development Tutorial";
let longestWorld=word.split(" ").reduce(function(first,second){
    if(first.length<second.length){
        first=second
    }
    return first;
})
console.log(longestWorld)