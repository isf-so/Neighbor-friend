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