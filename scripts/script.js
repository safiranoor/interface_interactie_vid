// JavaScript Document
console.log("hi");

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("body > nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuOpenButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu(){
  deNav.classList.add("toonMenu")
}

// stap 1 - zoek sluiten button op
const menuSluitButton = document.querySelector("body > nav button");

// stap 2 - laat die button luisteren naar kliks
menuSluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu(){
  deNav.classList.remove("toonMenu");  
}

// stap 1: sla search button op 
const searchOpenButton = document.querySelector("header > button:nth-of-type(2)");

// stap 2: laat de search button luisteren naar kliks en voer dan een functie uit
searchOpenButton.onclick = toggleSearch;

// stap 3: voeg in de functie een claas toe aan de nav
function toggleSearch() {  
  // zoek de nav op
const zoekForm = document.querySelector("body > form");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  zoekForm.classList.toggle("toonZoek");
}


