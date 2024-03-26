//Deklarationen
  //Navigation
    const hamburgerToggle = document.querySelector("#hamburger-toggle");
    const overlay = document.querySelector("#overlay");
    const closeToggle = document.querySelector("#close");

  //Typewriter
    let i = 0;
    const txt = "Turning blobs into: Oh, thats cool!"; 
    const speed = 50;

  //Slideshow


//Event Listener
  //Typewriter
    window.onload = function() {
      typeWriter(); 
    };

    //Navigation
    hamburgerToggle.addEventListener("click", openNav);
    closeToggle.addEventListener("click", closeNav);

  //Slideshow
  document.addEventListener("DOMContentLoaded", function() {
    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");
  
    // Add event listeners for previous buttons
    prevButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const slideshowId = button.parentElement.id;
        plusSlides(-1, slideshowId);
      });
    });
  
    // Add event listeners for next buttons
    nextButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const slideshowId = button.parentElement.id;
        plusSlides(1, slideshowId);
      });
    });
  });
  
//Funktionen
  //Typewriter
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("answer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

  //Navigation
    function openNav() {
      document.getElementById("overlay").style.display = "flex";
    }

    function closeNav() {
      document.getElementById("overlay").style.display = "none";
    }

  //Slideshow
  let slideIndex = 1;
  
  function plusSlides(n, slideshowId) {
    showSlides(slideIndex += n, slideshowId);
  };

  function showSlides(n, slideshowId) {
    let i;
    const slides = document.getElementById(slideshowId).getElementsByClassName("slides")[0].getElementsByTagName("img");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  };