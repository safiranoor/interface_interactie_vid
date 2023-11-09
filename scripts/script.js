// JavaScript Document
console.log("Howdy!");

// Define all variables
var kettingButton = document.querySelector(".ketting");
var Dialog1 = document.querySelector("dialog:nth-of-type(1)");

var cocktailButton = document.querySelector(".cocktail");
var Dialog2 = document.querySelector("dialog:nth-of-type(2)");

var lipstickButton = document.querySelector(".lipstick");
var Dialog3 = document.querySelector("dialog:nth-of-type(3)");

var ringenButton = document.querySelector(".ringen");
var Dialog4 = document.querySelector("dialog:nth-of-type(4)");

var pagina1 = document.querySelector(".pagina-1");
var pagina2 = document.querySelector(".pagina-2");
var pagina3 = document.querySelector(".pagina-3");

var paginaButtons = document.querySelector(".pagina-buttons");

// Toon standaard de pagina 1
pagina1.style.display = "block";
pagina2.style.display = "none";
pagina3.style.display = "none";

// Actions
kettingButton.onclick = ShowInfo1;
cocktailButton.onclick = ShowInfo2;
lipstickButton.onclick = ShowInfo3;
ringenButton.onclick = ShowInfo4;

paginaButtons.addEventListener("click", function (event) {
	// Check of het geklikte element een BUTTON is
	if (event.target.tagName === "BUTTON") {
		// Haal het paginanummer uit de tekst van de button
		var pageNumber = parseInt(event.target.textContent);

		// Check het paginanummer en roep de bijbehorende functie aan
		switch (pageNumber) {
			// Als het paginanummer 1 is, roep ShowPage1 aan
			case 1:
				ShowPage1();
				break;
				// Als het paginanummer 2 is, roep ShowPage2 aan
			case 2:
				ShowPage2();
				break;
				// Als het paginanummer 3 is, roep ShowPage3 aan
			case 3:
				ShowPage3();
				break;
		}
	}
});

// Functions
function ShowInfo1() {
	Dialog1.showModal();
}

function ShowInfo2() {
	Dialog2.showModal();
}

function ShowInfo3() {
	Dialog3.showModal();
}

function ShowInfo4() {
	Dialog4.showModal();
}

function ShowPage1() {
	// Toon pagina 1 en verberg de rest
	pagina1.style.display = "block";
	pagina2.style.display = "none";
	pagina3.style.display = "none";
}

function ShowPage2() {
	// Toon pagina 2 en verberg de rest
	pagina1.style.display = "none";
	pagina2.style.display = "block";
	pagina3.style.display = "none";
}

function ShowPage3() {
	// Toon pagina 3 en verberg de rest
	pagina1.style.display = "none";
	pagina2.style.display = "none";
	pagina3.style.display = "block";
}