function findMatchString(){
let x = document.getElementById("p1").innerHTML
let y = document.getElementById("p2").innerHTML
let myRegex = /I will./
document.getElementById("p3").innerHTML = `Matched string : ${myRegex}` ;
//document.getElementById("p4").innerHTML = myRegex.test(y);
document.getElementById("p4").innerHTML = y.match(myRegex);

}
 