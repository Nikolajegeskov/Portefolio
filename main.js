'use strict';

(function() {

  // ---------- typed.js ---------- //
  let typed = new Typed('.Typed', {
    strings: [" I'm Nikolaj Egeskov Nielsen.", "I'm looking for internship", "I'm a frontender", "I'm a Web Developer.", "Take a look around"
  ],
    typeSpeed: 100,
    loop: true,
  });
})();
//Get the button:
mybutton = document.getElementById("myBtn");
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
