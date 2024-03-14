let O = 0;
let contenu = '<div class="local" id="local"><div class="textlocal"><h3>Activer la localisation</h3></div><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></div></div>';

function toggleDiv() {
    if (O === 0) {
        document.querySelector("#local").innerHTML = contenu;
        O = 1;
    } else {
        document.querySelector("#local").innerHTML = '';
        O = 0;
    }
}

// Ajout d'un gestionnaire d'événements pour détecter le clic
document.querySelector("#local").addEventListener("click", toggleDiv);
