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
    const prevButton = document.getElementsByClassName("prev");
    const nextButton = document.getElementsByClassName("next");
    let slideIndex = [1, 1, 1];
    let slideID = ["slide-maritime", "slide-animal", "slide-warriors"];

    //Initialstatus der Arrays
      showSlide(1, 0);
      showSlide(1, 1);
      showSlide(1, 2);

//Event Listener
  //Typewriter
    window.onload = function() {
      typeWriter(); 
    };

    //Navigation
    hamburgerToggle.addEventListener("click", openNav);
    closeToggle.addEventListener("click", closeNav)

  //Slideshow
    prevButton.addEventListener("click", function() {
      plusSlides(-1);
    })
    nextButton.addEventListener("click", function() {
      plusSlides(1);
    })

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
    function plusSlides(n, no) {
      showSlide(slideIndex[no] += n, no);
    }

    function showSlide(n, no) {
      let i;
      let x = document.getElementsByClassName(slideID[no]);
      if (n > x.length) {slideIndex[no] = 1}
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex[no]-1].style.display = "block";
    }