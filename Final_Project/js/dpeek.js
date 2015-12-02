console.log("this works")
// (function() {

//   "use strict";

//   var toggles = document.querySelectorAll(".c-hamburger");

//   for (var i = toggles.length - 1; i >= 0; i--) {
//     var toggle = toggles[i];
//     toggleHandler(toggle);
//   };

//   function toggleHandler(toggle) {
//     toggle.addEventListener( "click", function(e) {
//       e.preventDefault();
//       (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   }

// })();



/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

  
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }
    // if ($('i').hasClass('fa-bars')){
    //     $('i').removeClass('fa-bars');
    //     $('i').addClass('glyphicon glyphicon-remove');
    // } 
    // $("#site-menu").toggle().animate({
        // left: "0",
        // toggle is making element turn 
    //     left: "0"
    // }, 900);  
    // $("#site-menu").css({
    //     display: "inherit"
    // });  

}



/* Makes to menu close when you press the escape button*/
$(document).keyup(function(e) {
if (e.keyCode == 27) {
  if ($('#site-wrapper').hasClass('show-nav')) {
    // Assuming you used the function I made from the demo
    toggleNav();
  }
} 
});


function hoverThis(element) {
    console.log(element);
    element.setAttribute('src', 'images/nike_fuelband_pulse.gif');
}
function unhoverThis(element) {
    element.setAttribute('src', 'images/nike_fuelband.jpg');
}















