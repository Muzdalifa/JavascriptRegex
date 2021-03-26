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
let myRegex = /[a-z]/gi // return ba or be or bi or bo or bu,
//let myRegex = /b[aeiou]g/gi // the first letter must be b and the last must be g, in between can have vowel a,e,i,o,u
document.getElementById("p4b").innerHTML = `Matched string : ${myRegex}`;
document.getElementById("p4c").innerHTML = y.match(myRegex);
console.log(y.match(myRegex)) //this return array of all matched string
 
}