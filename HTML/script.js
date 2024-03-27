//Navigation
  //Deklarationen
    const hamburgerToggle = document.querySelector("#hamburger-toggle");
    const overlay = document.querySelector("#overlay");
    const closeToggle = document.querySelector("#close");

  //Event Listener
    hamburgerToggle.addEventListener("click", openNav);
    closeToggle.addEventListener("click", closeNav);

  //Funktionen
    //Öffnen des Navigationsoverlays
      function openNav() {
        document.getElementById("overlay").style.display = "flex";
      }

    //Schließen des Navigationsoverlays
    function closeNav() {
      document.getElementById("overlay").style.display = "none";
    }

//Typewriter-Effekt
    //Deklarationen
    let i = 0;
    const txt = "Turning blobs into: Oh, thats cool!"; 
    const speed = 50;

    //Event-Listener
    window.onload = function() {
      typeWriter(); 
    };

/*     Funktion: so lange i kleiner ist als die Länge meines Wunschtextes wird die Funktion wiederholt 
    aufgerufen und fügt immer ein Zeichen hinzu
 */    
      function typeWriter() {
        if (i < txt.length) {
        document.getElementById("answer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
      }

//Slideshow
  //Event Listener für das Durchklicken durch die Slideshow
    document.addEventListener("DOMContentLoaded", function() {
      const prevButtons = document.querySelectorAll(".prev");
      const nextButtons = document.querySelectorAll(".next");

    prevButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const slideshowId = button.parentElement.id;
        plusSlides(-1, slideshowId);
      });
    });

    nextButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const slideshowId = button.parentElement.id;
        plusSlides(1, slideshowId);
      });
    });
  });

  //Deklaration
  let slideIndex = 1;
  
  //Funktionen
    //funktioniert im Zusammenhang mit showSlides. Updatet den slideIndex durch Hinzufügen von n
    function plusSlides(n, slideshowId) {
      showSlides(slideIndex += n, slideshowId);
    };

    //Loopt die Slideshow und trägt dafür Sorge, dass nur der Slide mit dem aktuellen Index angezeigt wird
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
      slides[slideIndex-1].style.display = "flex";
    };

//SLideshow Modal
    //Deklarationen
      const modal = document.getElementById("myModal");
      const modalImg = document.getElementById("modalImg");
      const captionText = document.getElementById("caption");
      const span = document.getElementsByClassName("close")[0];

    //Immer wenn man auf das aktuelle Bild der Slideshow klickt, öffnet sich das modale Bild
      document.addEventListener("DOMContentLoaded", function() {
        const slideshows = document.querySelectorAll(".slideshow");
        slideshows.forEach(function(slideshow) {
          const slides = slideshow.querySelectorAll(".slides img");
          slides.forEach(function(img) {
            img.addEventListener("click", function() {
              modal.style.display = "block";
              modalImg.src = this.src;
              captionText.textContent = this.alt;
              captionText.classList.add("image-caption"); 
            });
          });
        });

    //Schließen des Modals
        span.onclick = function() {
          modal.style.display = "none";
        };

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      });


//Zoom mit Mausrad
  //Aktueller Zoom
      let zoomLevel = 1;

  //Event Listener
    modalImg.addEventListener("wheel", zoomImage);

  // Verhindert, dass beim Mausrad-Scrollen, dass modale Fenster gescrollt wird
    function zoomImage(e) {
      e.preventDefault();

  //Berechnet neues Zoomlevel indem es den Betrag der vertikalen Mausbewegung in Bezug zur Aufgangsstellung berechnet. 
  //Außerdem wird exzessives Herein- oder Herauszoomen limitert
    zoomLevel += e.deltaY * -0.01;
    zoomLevel = Math.min(Math.max(0.5, zoomLevel), 3); // Limit zoom level between 0.5x and 3x

  //Greift auf das CSS Styling zu und wendet das Zoomlevel auf das Styling an
    modalImg.style.transform = `scale(${zoomLevel})`;
    };


