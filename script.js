const choix_user = document.getElementById('choix_user');
const choix_ordinateur = document.getElementById('choix_ordinateur');
var resultat = document.getElementById('resultat');
const choixpossibles = document.querySelectorAll('button');
let choix_clique

choixpossibles.forEach(choixpossibles => choixpossibles.addEventListener('click',(e)=> {
    choix_clique = e.target.id;

}) )