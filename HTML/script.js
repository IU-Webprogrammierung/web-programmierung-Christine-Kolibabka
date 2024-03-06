const hamburgerToggle = document.querySelector("#hamburger-toggle");
const arrowUp = document.querySelector("#arrow-up");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {stickybar()};

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