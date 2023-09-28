// ---------1-----------
var age= 37;
alert("I am " + age + " years old");

// ---------2-----------
var myBirthYear= 1986;
document.write("My birth year is " + myBirthYear + "<br>");
document.write("Datatype of my declared variable is number");



// ========3=============

var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;




// ---------4-----------
var visitorName= prompt("Enter your name");
var prodTitle= prompt("What do you want to buy?");
var quantity= +prompt("How many " + prodTitle + " do you want to buy?");
document.write("<br> <br>" + "<b>"  + visitorName + "</b>" + " ordered "  + "<b>" + quantity + " " + prodTitle + "(s) </b> " + " on XYZ Clothing Store");
