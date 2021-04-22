// const allCountries = randomPersonData.

const listLength = randomPersonData.length;
const main = document.getElementById("main");

// (1) Maak een lijst van alle landen, gesorteerd op naam van het land.

function opdracht1() {
  // clear the page and create an UL
  main.innerHTML = "";
  const newUl = document.createElement("ul");
  main.appendChild(newUl);
  // get a list of countries
  const uniqueRegions = randomPersonData
    .map((item) => item.region)
    .filter((value, index, self) => self.indexOf(value) === index);
  console.log(uniqueRegions);
  // add countries to page
  uniqueRegions.forEach((region) => {
    const newLi = document.createElement("li");
    newUl.append(newLi);
    newLi.innerHTML = region;
  });
}

// (2) laat voor- en achternaam en hun foto zien
// sorteer de lijst op voornaam
// elke persoon op die lijst moet
// - vrouw zijn
// - ouder zijn dan 30 (1990 of ouder)
// - een steenbok zijn (jarig van 22 december t/m 19 januari)

function filterFemale(person) {
  if (person.gender === "female") {
    return true;
  } else {
    return false;
  }
}

function filterAge(person) {
  const birthday = person.birthday.mdy;
  const yearOfBirth = birthday.split("/")[2];
  if (yearOfBirth <= 1990) {
    return true;
  } else {
    return false;
  }
}

function filterBs(person) {
  const mdy = person.birthday.mdy;
  const month = mdy.split("/")[0];
  const day = mdy.split("/")[1];
  if (month == 1) {
    if (day <= 19) {
      return true;
    }
  } else if (month == 12) {
    if (day >= 22) {
      return true;
    }
  } else {
    return false;
  }
}

function opdracht2() {
  // clear the page and create an UL
  main.innerHTML = "";
  const newUl = document.createElement("ul");
  main.appendChild(newUl);
  // get a list of filtered people
  const filteredPersons = randomPersonData
    .filter(filterFemale)
    .filter(filterAge)
    .filter(filterBs);
  console.log(filteredPersons);
  // add people to page
  filteredPersons.forEach((person) => {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newSpan = document.createElement("span");
    const pic = person.photo;
    const text = `${person.name} ${person.surname}`;
    newImg.setAttribute("src", pic);
    newLi.append(newImg);
    newUl.append(newLi);
    newLi.append(newSpan);
    newSpan.innerHTML = text;
  });
}

// buttons!!!!
document.getElementById("opdracht1").addEventListener("click", opdracht1);
document.getElementById("opdracht2").addEventListener("click", opdracht2);
document.getElementById("opdracht3").addEventListener("click", opdracht0);
document.getElementById("opdracht4").addEventListener("click", opdracht0);
document.getElementById("opdracht5").addEventListener("click", opdracht0);
document.getElementById("opdracht6").addEventListener("click", opdracht0);

function opdracht0() {
  main.innerHTML = "Hello World";
  console.log("Ha ha!");
}
