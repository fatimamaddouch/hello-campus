

const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];


function estValide(produit) {
    return typeof produit.prix === "number" && produit.prix >= 0 &&
        typeof produit.stock === "number" && produit.stock >= 0;
}

console.log("=== CATALOGUE PRODUITS ===");


console.log("\n--- 1. Affichage du catalogue ---");
produits.forEach(function (p) {
    console.log(p.nom + " - " + p.prix + " MAD");
});


const produitsDisponibles = produits.filter(function (p) {
    return p.stock > 0 && estValide(p);
});
console.log("\n--- 2. Produits disponibles ---");
console.log("Nombre de produits disponibles : " + produitsDisponibles.length);


const valeurStock = produits.reduce(function (total, p) {
    if (estValide(p)) {
        return total + (p.prix * p.stock);
    }
    return total;
}, 0);
console.log("\n--- 3. Valeur totale du stock ---");
console.log("Valeur du stock : " + valeurStock + " MAD");


console.log("\n--- 4. Produit disponible le moins cher ---");
if (produitsDisponibles.length === 0) {
    console.log("Aucun produit disponible.");
} else {
    const moinsCher = produitsDisponibles.reduce(function (min, p) {
        return p.prix < min.prix ? p : min;
    }, produitsDisponibles[0]);

    const { nom, prix } = moinsCher;
    console.log("Produit le moins cher : " + nom + " (" + prix + " MAD)");
}

console.log("\n--- 5. Résumé (map) ---");
const resume = produits.map(function (p) {
    return p.nom + " - " + p.prix + " MAD - " + p.stock + " unités";
});

resume.forEach(function (ligne) {
    console.log(ligne);
});