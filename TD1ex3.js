const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

const [Pays1, Pays2] = pays;
console.log(Pays1);  
console.log(Pays2); 

const [, , Pays3] = pays;
console.log(Pays3); 

const [destinationPrincipale, ...autresPays] = pays;
console.log(destinationPrincipale);
console.log(autresPays);

const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};

const {destination,prix}=voyage;
console.log(destination);
console.log(prix);

const { destination: ville } = voyage;
console.log(ville); 

const { prix = 1000, duree = 7 } = voyage;
console.log(prix);  
console.log(duree); 

function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Destination :", destination);
    console.log("Prix :", prix, "DT");
    console.log("Durée :", duree, "jours");
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}

afficherVoyage(voyage);