const pageBg = document.querySelector(".page-bg");
const navBar = document.querySelector("#navBar");
const contactForm = document.querySelector(".contact-form");
const profileContent = document.querySelector("#profileContent");
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
	// .fromTo(hangman, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut })
	// .fromTo(trivia, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut })
	// .fromTo(rutgers, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut })
	// .fromTo(rpg, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut })
	// .fromTo(rps, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut });
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
