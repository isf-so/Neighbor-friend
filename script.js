// Sélectionnez la div parent où vous voulez ajouter les personnes
const listepersonne = document.querySelector('.listepersonne');

// Boucle pour créer les 25 personnes
for (let i = 1; i <= 25; i++) {
    // Créez un nouvel élément div avec la classe "personne"
    const personne = document.createElement('div');
    personne.classList.add('personne');

    // Créez un nouvel élément div avec la classe "cercle" pour le carré
    const cercle = document.createElement('div');
    cercle.classList.add('cercle');
    // Ajoutez le commentaire pour le carré
    cercle.innerHTML = '<!-- carrer -->';

    // Créez un nouvel élément div avec le nom de la personne
    const nomPersonne = document.createElement('div');
    const nom = document.createElement('p');
    nom.textContent = 'Perso' + i;
    nomPersonne.appendChild(nom);

    // Ajoutez le carré et le nom à l'élément personne
    personne.appendChild(cercle);
    personne.appendChild(nomPersonne);

    // Ajoutez la personne à la liste des personnes
    listepersonne.appendChild(personne);
}





let option1 = 0;
let option2 = 0;

const evenementHTML = `
<ul id="listeEvenements" style="overflow-y: scroll; max-height: 200px;">
    <li class="evenement">
        <h3>Concert en plein air</h3>
        <p>Date: 20 avril 2024</p>
        <p>Heure: 18h00</p>
        <p>Lieu: Parc Central</p>
    </li>
    <li class="evenement">
    <h3>Concert en plein air</h3>
    <p>Date: 20 avril 2024</p>
    <p>Heure: 18h00</p>
    <p>Lieu: Parc Central</p>
</li>
<li class="evenement">
<h3>Concert en plein air</h3>
<p>Date: 20 avril 2024</p>
<p>Heure: 18h00</p>
<p>Lieu: Parc Central</p>
</li>
<li class="evenement">
<h3>Concert en plein air</h3>
<p>Date: 20 avril 2024</p>
<p>Heure: 18h00</p>
<p>Lieu: Parc Central</p>
</li>
<li class="evenement">
<h3>Concert en plein air</h3>
<p>Date: 20 avril 2024</p>
<p>Heure: 18h00</p>
<p>Lieu: Parc Central</p>
</li>
</ul>`;

const creerHTML = `
<form>
    <label for='titre'>Titre de l'événement:</label><br>
    <input type='text' id='titre' name='titre'><br><br>
    <label for='date'>Date:</label><br>
    <input type='date' id='date' name='date'><br><br>
    <label for='heure'>Heure:</label><br>
    <input type='time' id='heure' name='heure'><br><br>
    <label for='lieu'>Lieu:</label><br>
    <input type='text' id='lieu' name='lieu'><br><br>
    <button type='submit'>Créer l'événement</button>
</form>`;

function optiontitre1() {
    const evenementsContainer = document.querySelector(".evenements");
    const nouvelEvenementContainer = document.querySelector("#nouvelEvenement");

    if (option1 === 0) {
        evenementsContainer.innerHTML = ""; // Vide la liste d'événements s'il était affiché précédemment
        nouvelEvenementContainer.innerHTML = creerHTML;
        option1 = 1;
    } else {
        nouvelEvenementContainer.innerHTML = ""; // Vide le formulaire s'il était affiché précédemment
        option1 = 0;
    }
}

function optiontitre2() {
    const evenementsContainer = document.querySelector(".evenements");
    const nouvelEvenementContainer = document.querySelector("#nouvelEvenement");

    if (option2 === 0) {
        evenementsContainer.innerHTML = evenementHTML;
        option2 = 1;
    } else {
        evenementsContainer.innerHTML = ""; // Vide la liste d'événements s'il était affiché précédemment
        option2 = 0;
    }
}
