const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

const reservationconfirmé=reservations.filter(reservation=>reservation.statut==="Confirmée");
console.log(reservationconfirmé);

const nomsclients=reservations.map(reservation=>reservation.client);
console.log(nomsclients);

const rechercheres=reservations.find(reservation=>reservation.numero===103);
console.log(rechercheres);

const montantTotal = reservations
    .filter(reservation => reservation.statut === "Confirmée")
    .reduce((total, reservation) => total + reservation.montant, 0);

console.log(montantTotal);

const resconfirmée=reservations.every(reservation=>reservation.statut==="Confirmée");
console.log(resconfirmée);

const tab=reservations.map(reservation => ({
    client: reservation.client,
    voyage: reservation.destination
}));
console.log(tab);