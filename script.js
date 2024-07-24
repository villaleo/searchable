// Our large collection of fruits (the database!)
let fruits = [
  "Abiu",
  "Açaí",
  "Acerola",
  "Akebi",
  "Ackee",
  "African Cherry Orange",
  "American Mayapple",
  "Apple",
  "Apricot",
  "Aratiles",
  "Araza",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Black sapote",
  "Blueberry",
  "Boysenberry",
  "Breadfruit",
  "Buddha's hand (fingered citron)",
  "Cactus pear",
  "Canistel - also called egg fruit",
  "Catmon",
  "Cempedak",
  "Cherimoya (Custard Apple)",
  "Cherry",
  "Chico fruit",
  "Citron",
  "Cloudberry",
  "Coco de mer",
  "Coconut",
  "Crab apple",
  "Cranberry",
  "Currant",
  "Damson",
  "Date",
  "Dragonfruit (or Pitaya)",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Finger Lime (or Caviar Lime)",
  "Gac",
  "Goji berry",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Grewia asiatica",
  "Guava",
  "Hala fruit",
  "Haws, fruit of Hawthorn",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba (Plinia)",
  "Jackfruit",
  "Jambul",
  "Japanese plum",
  "Jostaberry",
  "Jujube",
  "Juniper berry",
  "Kaffir lime",
  "Kiwano (horned melon)",
  "Kiwifruit",
  "Kumquat",
  "Lanzones",
  "Lemon",
  "Lime",
  "Loganberry",
  "Longan",
  "Loquat",
  "Lulo",
  "Lychee",
  "Magellan Barberry",
  "Macopa (Wax Apple)",
  "Mamey apple",
  "Mamey Sapote",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Medlar",
  "Melon",
  "Cantaloupe",
  "Galia melon",
  "Honeydew",
  "Mouse melon",
  "Muskmelon",
  "Watermelon",
  "Miracle fruit",
  "Momordica fruit",
  "Monstera deliciosa",
  "Mulberry",
  "Nance",
  "Nectarine",
  "Orange",
  "Blood orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Pawpaw",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Prune (dried plum)",
  "Pineapple",
  "Pineberry",
  "Plumcot",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Rose apple",
  "Salal berry",
  "Salak",
  "Santol",
  "Sapodilla",
  "Sapote",
  "Sarguelas",
  "Satsuma",
  "Sloe",
  "Soursop",
  "Star apple",
  "Star fruit",
  "Strawberry",
  "Sugar apple",
  "Suriname cherry",
  "Tamarillo",
  "Tamarind",
  "Tangelo",
  "Tayberry",
  "Thimbleberry",
  "Ugli fruit",
  "White currant",
  "White sapote",
  "Ximenia",
  "Yuzu",
];

// DocString

/** @type {HTMLDivElement} */
let searchAlert = document.getElementById("alert-search-warn");
/** @type {HTMLInputElement} */
let searchInput = document.getElementById("nav-search");
/** @type {HTMLUListElement} */
let fruitList = document.getElementById("ul-fav-fruits");

// Hide the search results alert warning.
searchAlert.style.display = "none";
// Focus the search bar so users can start typing to search immediately.
searchInput.focus();

// Append all the fruit to load dynamically.
for (const fruit of fruits) {
  fruitList.innerHTML += `
    <li>${fruit}</li>
  `;
}

// Check for results after each keystroke on the search bar.
searchInput.addEventListener("keyup", function () {
  let matchesFound = 0;
  const query = this.value.toLowerCase().trim();

  for (const child of fruitList.children) {
    const fruitName = child.innerText;
    const matchFound = fruitName.toLowerCase().includes(query);

    // Display or hide the item, if the query matches the fruit name.
    if (matchFound) {
      child.style.display = "list-item";
      matchesFound += 1;
    } else {
      child.style.display = "none";
    }
  }

  // Show or hide the alert, if no results were found.
  if (query !== "" && matchesFound === 0) {
    searchAlert.innerText = `No results found for '${query}'.`;
    searchAlert.style.display = "block";
  } else {
    searchAlert.style.display = "none";
  }
});
