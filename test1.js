const t=[10,12,3,10,7];
const[a,b]=t;

const[a1,b1,c1]=t;
const[a2,b2]=t;
const[, ,t2]=t;
console.log(t2);

const produit={id:1,
    nom:"souris",
    prix:20,
    stock:15
};
//const{nom,prix}=produit;
//console.log(nom,prix);
const{nom:designation,prix}=produit;
console.log(designation,prix);

const panier=[
    {
        id:1,
        nom:"souris",
        prix:20,
        stock:15
    },
    {
        id:2,
        nom:"sclavier",
        prix:80,
        stock:3
    }
]
const nomPrix=panier.map (({nom,prix})=>({nom,prix}));
console.log(nomPrix);

const nvProduit= {
    id:4,
    nom:"ecouteur",
    prix:30,
    stock:5
}

const nvPanier=[...panier,nvProduit];
console.log(nvPanier);
