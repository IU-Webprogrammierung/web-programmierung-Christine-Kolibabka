const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");
const arrowUp = document.querySelector("#arrow-up");

hamburgerToggle.addEventListener("click", onHamburgerClick);
arrowUp.addEventListener("click", onArrowClick);

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