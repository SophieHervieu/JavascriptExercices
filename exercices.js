// Exo 1 : déclarer des variables de différents types (string, number, boolean) et d'afficher leur contenu dans la console.
console.log("Exercice 1");
let firstName = "Anna";
let age = 26;
let hasDegree = true;

console.log(firstName);
console.log(age);
console.log(hasDegree);
console.log(firstName + ", " + age + ", " + hasDegree);
// Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.
console.log("Exercice 2");
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  console.log(celsiusToFahrenheit(30));
// Conditions et boucles :
// Exo 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.
console.log("Exercice 3");
function isEven(num) {
    if ( num % 2 == 0) {
        console.log("le nombre est pair.");
    } else {
        console.log("le nombre est impair");
    }
    return num;
}

console.log(isEven(18));
// Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.
console.log("Exercice 4");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}
// Fonctions :
// Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
console.log("Exercice 5");
function sum(a, b) {
    let total = a + b;
    return total;
}

console.log(sum(28, 1244));
// Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.
console.log("Exercice 6");
function exists(str, word) {
    if (str.includes(word)) {
        console.log("Le mot " + word + " figure dans le texte " + str);
    } else {
        console.log("Le mot " + word + " ne figure pas dans le texte " + str);
    }
    return str.includes(word);
}

exists("The quick brown fox jumps over the lazy dog.", "fox");
// Tableaux et objets :
// Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
console.log("Exercice 7");
let arr = ["Pierre", "Noémie", "Aurélien", "Julie", "Alexis", "Pauline"];
for (let i= 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)
console.log("Exercice 8");
let character = {
    fullName: "Samwise Gamgee",
    age: 30,
    city: "Hobbiton"
};

console.log(character.fullName);
console.log(character.age);
console.log(character.city);
// Manipulation de DOM :
// Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
let title = document.createElement('h1');
let content = document.createTextNode('Random Chuck Norris Jokes Generator');
title.appendChild(content);
document.body.appendChild(title);
// Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte
let btn = document.createElement("Button");
let text = document.createTextNode("CRAZY MODE");
btn.appendChild(text);
document.body.appendChild(btn);

btn.addEventListener("click", function() {
    alert("CHARTREUSE!");
    document.body.style.backgroundColor = document.body.style.backgroundColor === "chartreuse" ? "white" : "chartreuse";
});
// Exo 11 : Contactez une api qui génère des chuck Norris Facts , et  on affiche dans blague dans la page https://api.chucknorris.io/jokes/random
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur réseau !');
    }
    return response.json();
  })
  .then(data => {
    // console.log(data);
    const joke = data.value;

    const randomJoke = document.createElement('p');
    randomJoke.textContent = joke;
    document.body.appendChild(randomJoke);

  })
  .catch(error => {
    console.error('Il y a eu un problème avec la requête :', error);
  });
// Exo 12 : dans la page web mettre en place un système de Dark Chartreuse Mode on click sur un bouton cela change le look de la page ambiance chartreuse de fait on peut rajouter du contenu côté HTML du h1, des img, des <p>
// Voir l'écouteur d'événement sous l'initialisation du bouton
