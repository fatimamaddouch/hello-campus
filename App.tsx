import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Les données du catalogue
  const produits = [
    { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
    { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
    { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
    { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
  ];


  const disponibles = produits.filter(p => p.stock > 0);
  const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusStock - Catalogue</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Produits disponibles :</Text>
        <Text style={styles.value}>{disponibles.length} produits</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Valeur totale du stock :</Text>
        <Text style={styles.value}>{valeurStock} MAD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#4B5563',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 5,
  },
});