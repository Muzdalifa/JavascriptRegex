//search literal string
function findMatchString(){
let y = document.getElementById("p2").innerHTML
let myRegex = /I will|home/gi // g means global ie search all strings, here the space matter, if yo keep space you might get an error
document.getElementById("p3").innerHTML = `Matched string : ${myRegex}` ;
//document.getElementById("p4").innerHTML = myRegex.test(y); this return t
document.getElementById("p4").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched string

}

//search  string with wilcard .
function findStringWithPeriod(){
let y = document.getElementById("p2a").innerHTML
let myRegex = /hu./gi // match any word starting with hu
//let myRegex = /.hu/gi // match any word ending with hu
document.getElementById("p2c").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p2d").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched string

}

function matchCharacter(){
 let y = document.getElementById("p3a").innerHTML
let myRegex = /b[aeiou]/gi // return ba or be or bi or bo or bu,
//let myRegex = /b[aeiou]g/gi // the first letter must be b and the last must be g, in between can have vowel a,e,i,o,u
document.getElementById("p3b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p3c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched string
 
}

function matchAtoZ(){
 let y = document.getElementById("p4a").innerHTML
let myRegex = /[a-z]/gi 
document.getElementById("p4b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p4c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character
 
}

function matchLettersAndNumbers(){
  let y = document.getElementById("p5a").innerHTML
let myRegex = /[2-6h-s]/gi //this match single character 
document.getElementById("p5b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p5c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character
 
}

function matchEverythingExceptNumbersAndVowels(){
  let y = document.getElementById("p6a").innerHTML
let myRegex = /[^0-9aeiou]/gi //match all except leteers and numbers 
document.getElementById("p6b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p6c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character
 
}

function matchLettersMoreThanOnceOccurence(){
let y = document.getElementById("p7a").innerHTML
let myRegex = /s+/gi 
document.getElementById("p7b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p7c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character
}

function matchlettersZeroOrMore(){
let y = document.getElementById("p8a").innerHTML
let myRegex = /o*/gi   //* means zero or more occurence of any character
document.getElementById("p8b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p8c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character

}

//gready match returns the highest possible solution as possible.
function greadyMatch(){
let y = document.getElementById("p9a").innerHTML
let myRegex = /<.*>/gi // . means amcth any character, ie numbers, letters, symbol   
document.getElementById("p9b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p9c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched character

}

// lazy match find the first match it found
function lazyMatch(){
 let y = document.getElementById("p10a").innerHTML
let myRegex = /<.*?>/gi // ? means lazy  
document.getElementById("p10b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p10c").innerHTML = y.match(myRegex);
}

function findCriminalDenotedByC(){
let y = document.getElementById("p11a").innerHTML
let myRegex = /C+/gi 
document.getElementById("p11b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p11c").innerHTML = y.match(myRegex);
}

//we use ^ to match the start of string
function matchBegginingOfString(){
let y = document.getElementById("p12a").innerHTML
let myRegex = /^Cal/gi   // if the string is written as this will not be matched: Ricky and  Cal  both like racing
document.getElementById("p12b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p12c").innerHTML = y.match(myRegex);
}

//we use $ to match the end of string
function matchEndingOfString(){
 let y = document.getElementById("p13a").innerHTML
let myRegex = /racing$/gi  
// let myRegex = /g$/gi  //if just last charater 
document.getElementById("p13b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p13c").innerHTML = y.match(myRegex); 
}