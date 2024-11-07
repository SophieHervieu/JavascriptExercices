/*En js vous aller contacter l'API afin d'afficher les données dans la divCard (si possible en respectant le template)

On va afficher 
l'image de profil
titre (mr ou mme) le nom le prenom 
le mail
l'adresse complete (Num rue nom rue, ville, pays)
Tél 

ensuite on a un button si on click dessus cela recharge la div avec un nouvel utilisateur*/

async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors du fetch:", error);
        throw error;
    }
}

const url = "https://randomuser.me/api/";

function updateUserCard() {
fetchData(url)
    .then(data => {
        const user = data.results[0];
        console.log("Données utilisateur:", user); 
        
        const userCard = document.getElementById("userCard");

        userCard.innerHTML = '';

        const userPicture = document.createElement("img");
        userPicture.src = user.picture.large;
        userPicture.alt = "Photo de profil";
        userPicture.classList.add("card-img-top");
        userCard.appendChild(userPicture);

        const userName = document.createElement("h5");
        userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        userName.classList.add("card-title");
        userCard.appendChild(userName);

        const userEmail = document.createElement("p");
        userEmail.textContent = user.email;
        userEmail.classList.add("card-text");
        userCard.appendChild(userEmail);

        const userAdress = document.createElement("p");
        userAdress.textContent = `Adress: ${user.location.street.number} - ${user.location.street.name} (${user.location.city} - ${user.location.country})`;
        userAdress.classList.add("card-text");
        userCard.appendChild(userAdress);

        const userPhone = document.createElement("p");
        userPhone.textContent = `Phone: ${user.phone}`;
        userCard.appendChild(userPhone);

        let btn = document.createElement("Button");
        let text = document.createTextNode("Random user");
        btn.appendChild(text);
        userCard.appendChild(btn);

        btn.addEventListener("click", function() {
            updateUserCard();
        });

        btn.style.marginTop = "10px";
        btn.style.padding = "5px 5px";
        btn.style.backgroundColor = "#007bff";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.width = "120px";
        btn.style.display = "block";
        btn.style.marginLeft = "auto";
        btn.style.marginRight = "auto";
    })
    .catch(error => {
        console.error("Erreur lors de l'appel de l'API:", error);
    });
}

updateUserCard();