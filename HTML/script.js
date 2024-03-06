const hamburgerToggle = document.querySelector("#hamburger-toggle");
const arrowUp = document.querySelector("#arrow-up");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var i = 0;
var txt = "Turning blobs into: Oh, thats cool!"; 
var speed = 50;

window.onscroll = function() {stickybar()};
window.onload = function() {
    typeWriter(); 
  };

hamburgerToggle.addEventListener("click", onHamburgerClick);
arrowUp.addEventListener("click", onArrowClick);

function stickybar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

function onHamburgerClick(){
    if (!navbar.classList.contains("open")){
        navbar.classList.add("open");
    }
    else {
        navbar.classList.remove("open");
    }
};

function onArrowClick(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("answer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}