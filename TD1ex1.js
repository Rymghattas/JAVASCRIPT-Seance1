const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];

for(const destination of destinations){
    console.log(destination.ville)
}


destinations.forEach(destination => {
    console.log(destination.ville);
});


const ville=destinations.map(destination=>destination.ville);
console.log(ville);

const destinationinf=destinations.filter(destination=>destination.prix<1500);
console.log(destinationinf);

const destinationid3=destinations.find(destination=>destination.id===3);
console.log(destinationid3);

const pos=destinations.findIndex(destination=>destination.ville==="Tokyo");
console.log(pos);

const dispo=destinations.some(destination=>destination.disponible===true);
console.log(dispo);

const Tousprix=destinations.every(destination=>destination.prix>0);
console.log(Tousprix);

const budgetT = destinations.reduce(
    (total, destination) => total + destination.prix,
    0
);

console.log(budgetT); 