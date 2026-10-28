import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const produits = [
    { id: 1, nom: "Clavier", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", prix: 240, stock: 3 }
  ];

  const produitsDispos = produits.filter(p => p.stock > 0);
  const dispoCount = produitsDispos.length;
  const valeurTotale = produits.reduce((acc, p) => acc + (p.prix * p.stock), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusStock - Catalogue</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Produits disponibles :</Text>
        <Text style={styles.value}>{dispoCount} produits</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Valeur totale du stock :</Text>
        <Text style={styles.value}>{valeurTotale} MAD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2
  },
  label: {
    fontSize: 14,
    color: '#666'
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 5
  }
});