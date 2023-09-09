// Déclaration des tableaux contenant les listes des mots et phrases en Anglais proposés à l'utulisateur
const listeMots = ["Good", "Student", "Happy"]
const listePhrases = ["I am Noella", "Life is a adventure", "I like football"]

//initialisation du score
let score = 0

// Déclaration de la variable contenant le choix de l'utulisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utulisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while(choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if(choix === "mots") {
    // On parcours le tableau des mots
    for(let i = 0; i< listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " +listeMots[i])
        if(motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correcte, on incrémente le score
            score++
        }
    }
    console.log('====================================');
    console.log("Votre score est de " + score + " sur " + listeMots.length);
    console.log('====================================');
}
else {
    // On parcourt le tableau des phrases
    for(let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if(phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correcte, on incrémente le score
            score++
        }
    }
    console.log('====================================');
    console.log("Votre score est de " + score + " sur " + listePhrases.length);
    console.log('====================================');
}