const pageBg = document.querySelector(".page-bg");
const navBar = document.querySelector("#navBar");
const contactForm = document.querySelector(".contact-form");
const profileContent = document.querySelector("#profileContent");
const profileContentTwo = document.querySelector("#profileContentTwo");
const portfolioContent = document.querySelector("#portfolioContent");
const footer = document.querySelector("footer");
const hangman = document.querySelector("#hangman");
const rpg = document.querySelector("#rpgGame");
const trivia = document.querySelector("#triviaGame");
const rutgers = document.querySelector("#rutgersWidget");
const rps = document.querySelector("#rpsGame");
const input = document.querySelector(".md-form");

const tl = new TimelineMax();
function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function() {
  // DOM is loaded and ready for manipulation here
  tl.fromTo(
    pageBg,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
    .fromTo(
      profileContent,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: Power2.easeInOut }
    )
    .fromTo(
      profileContentTwo,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: Power2.easeInOut }
    )
    .fromTo(
      navBar,
      1,
      { opacity: "0" },
      { opacity: "1", ease: Power2.easeInOut }
    )
    .fromTo(
      footer,
      1,
      { opacity: "0" },
      { opacity: "1", ease: Power2.easeInOut }
    );
});
docReady(function() {
  // DOM is loaded and ready for manipulation here
  tl.fromTo(
    portfolioContent,
    1,
    { x: "100%" },
    { x: "0%", ease: Power2.easeInOut }
  ).fromTo(
    footer,
    1,
    { opacity: "0" },
    { opacity: "1", ease: Power2.easeInOut }
  );
});
docReady(function() {
  // DOM is loaded and ready for manipulation here
  tl.fromTo(
    contactForm,
    1,
    { y: "-150%" },
    { y: "0%", ease: Power2.easeInOut }
  );
});
//?-------------------------------------------arrow fade function------------------------------------------------------
$(window).scroll(function() {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});
//?-------------------------------------------arrow fade function------------------------------------------------------
//!-------------------------------------------this is for rain drops---------------------------------------------------
var makeItRain = function() {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
};

$(".splat-toggle.toggle").on("click", function() {
  $("body").toggleClass("splat-toggle");
  $(".splat-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".back-row-toggle.toggle").on("click", function() {
  $("body").toggleClass("back-row-toggle");
  $(".back-row-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".single-toggle.toggle").on("click", function() {
  $("body").toggleClass("single-toggle");
  $(".single-toggle.toggle").toggleClass("active");
  makeItRain();
});

makeItRain();
//!-------------------------------------------this is for rain drops---------------------------------------------------
//?-------------------------------------------this is for snow---------------------------------------------------
// Array to store our Snowflake objects
var snowflakes = [];

// Global variables to store our browser's window size
var browserWidth;
var browserHeight;

// Specify the number of snowflakes you want visible
var numberOfSnowflakes = 100;

// Flag to reset the position of the snowflakes
var resetPosition = false;

// Handle accessibility
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences
function setAccessibilityState() {
  if (reduceMotionQuery.matches) {
    enableAnimations = false;
  } else {
    enableAnimations = true;
  }
}
setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

//
// It all starts here...
//
function setup() {
  if (enableAnimations) {
    window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
    window.addEventListener("resize", setResetFlag, false);
  }
}
setup();

//
// Constructor for our Snowflake object
//
function Snowflake(element, speed, xPos, yPos) {
  // set initial snowflake properties
  this.element = element;
  this.speed = speed;
  this.xPos = xPos;
  this.yPos = yPos;
  this.scale = 1;

  // declare variables used for snowflake's motion
  this.counter = 0;
  this.sign = Math.random() < 0.5 ? 1 : -1;

  // setting an initial opacity and size for our snowflake
  this.element.style.opacity = (0.1 + Math.random()) / 3;
}

//
// The function responsible for actually moving our snowflake
//
Snowflake.prototype.update = function() {
  // using some trigonometry to determine our x and y position
  this.counter += this.speed / 5000;
  this.xPos += (this.sign * this.speed * Math.cos(this.counter)) / 40;
  this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
  this.scale = 0.5 + Math.abs((10 * Math.cos(this.counter)) / 20);

  // setting our snowflake's position
  setTransform(
    Math.round(this.xPos),
    Math.round(this.yPos),
    this.scale,
    this.element
  );

  // if snowflake goes below the browser window, move it back to the top
  if (this.yPos > browserHeight) {
    this.yPos = -50;
  }
};

//
// A performant way to set your snowflake's position and size
//
function setTransform(xPos, yPos, scale, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
}

//
// The function responsible for creating the snowflake
//
function generateSnowflakes() {
  // get our snowflake element from the DOM and store it
  var originalSnowflake = document.querySelector(".snowflake");

  // access our snowflake element's parent container
  var snowflakeContainer = originalSnowflake.parentNode;
  snowflakeContainer.style.display = "block";

  // get our browser's size
  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;

  // create each individual snowflake
  for (var i = 0; i < numberOfSnowflakes; i++) {
    // clone our original snowflake and add it to snowflakeContainer
    var snowflakeClone = originalSnowflake.cloneNode(true);
    snowflakeContainer.appendChild(snowflakeClone);

    // set our snowflake's initial position and related properties
    var initialXPos = getPosition(50, browserWidth);
    var initialYPos = getPosition(50, browserHeight);
    var speed = 5 + Math.random() * 40;

    // create our Snowflake object
    var snowflakeObject = new Snowflake(
      snowflakeClone,
      speed,
      initialXPos,
      initialYPos
    );
    snowflakes.push(snowflakeObject);
  }

  // remove the original snowflake because we no longer need it visible
  snowflakeContainer.removeChild(originalSnowflake);

  moveSnowflakes();
}

//
// Responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {
  if (enableAnimations) {
    for (var i = 0; i < snowflakes.length; i++) {
      var snowflake = snowflakes[i];
      snowflake.update();
    }
  }

  // Reset the position of all the snowflakes to a new value
  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (var i = 0; i < snowflakes.length; i++) {
      var snowflake = snowflakes[i];

      snowflake.xPos = getPosition(50, browserWidth);
      snowflake.yPos = getPosition(50, browserHeight);
    }

    resetPosition = false;
  }

  requestAnimationFrame(moveSnowflakes);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
  return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}

//
// Trigger a reset of all the snowflakes' positions
//
function setResetFlag(e) {
  resetPosition = true;
}
//?-------------------------------------------this is for snow---------------------------------------------------
//?-----------------------------------------contact form validation----------------------------------------------
$(function() {
  $("#contact-form").validator();

  $("#contact-form").on("submit", function(e) {
    if (!e.isDefaultPrevented()) {
      var url = contactme.php;

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        successful: function(data) {
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          var alertBox =
            '<div class="alert"' +
            messageAlert +
            ' alert-dismissable"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          if (messageAlert && messageText) {
            $("#contact-form")
              .find(".messages")
              .html(alertBox);
            $("#contact-form")[0].reset();
          }
        }
      });

      return false;
    }
  });
});

//?-----------------------------------------contact form validation----------------------------------------------
