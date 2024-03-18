//Deklarationen
const hamburgerToggle = document.querySelector("#hamburger-toggle");
const overlay = document.querySelector("#overlay");
const closeToggle = document.querySelector("#close");
var i = 0;
var txt = "Turning blobs into: Oh, thats cool!"; 
var speed = 50;

//Event Listener
window.onload = function() {
  typeWriter(); 
};
hamburgerToggle.addEventListener("click", openNav);
closeToggle.addEventListener("click", closeNav)

//Funktionen
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("answer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function openNav() {
  document.getElementById("overlay").style.display = "flex";
}

function closeNav() {
  document.getElementById("overlay").style.display = "none";
}