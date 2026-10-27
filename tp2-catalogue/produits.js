// 02 Données de départ
const produits = [
    { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
    { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
    { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
    { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

// Fonction de validation (Défi supplémentaire)
function estValide(produit) {
    return (
        typeof produit.prix === 'number' && Number.isFinite(produit.prix) && produit.prix >= 0 &&
        typeof produit.stock === 'number' && Number.isFinite(produit.stock) && produit.stock >= 0
    );
}

console.log("--- 1. Affichage du catalogue ---");
produits.forEach(p => {
    console.log(`${p.nom} - ${p.prix} MAD`);
});

console.log("\n--- 2. Produits disponibles ---");
const disponibles = produits.filter(p => p.stock > 0 && estValide(p));
console.log(`Nombre de produits disponibles : ${disponibles.length}`);

console.log("\n--- 3. Valeur totale du stock ---");
const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);
console.log(`Valeur du stock : ${valeurStock} MAD`);

console.log("\n--- 4. Produit disponible le moins cher ---");
if (disponibles.length > 0) {
    // Utilisation de la déstructuration
    const moinsCher = disponibles.reduce((min, p) => p.prix < min.prix ? p : min, disponibles[0]);
    const { nom, prix } = moinsCher;
    console.log(`Produit le moins cher : ${nom} (${prix} MAD)`);
} else {
    console.log("Aucun produit disponible.");
}

console.log("\n--- 5. Résumé (map) ---");
const resume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
resume.forEach(ligne => console.log(ligne));