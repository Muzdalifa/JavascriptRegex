//search literal string
function findMatchString(){
let y = document.getElementById("p2").innerHTML
let myRegex = /I will|home/gi // g means global ie search all strings, here the space matter, if yo keep space you might get an error
document.getElementById("p3").innerHTML = `Matched string : ${myRegex}` ;
//document.getElementById("p4").innerHTML = myRegex.test(y); this return t
document.getElementById("p4").innerHTML = y.match(myRegex);


}
 