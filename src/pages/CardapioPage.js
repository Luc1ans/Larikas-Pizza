import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PizzaItem from '../components/PizzaItem';

const Cardapio = (props) => {

  const onPress = () => {
    props.navigation.navigate("Carrinho");
  }
    
   return (
    <View style={styles.container}>
      <Text style={styles.header}>Larika's Pizza®</Text>
      {pizzas.map((pizza, index) => (
        <PizzaItem key={index} {...pizza} />
      ))}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Ver Carrinho</Text>
        </TouchableOpacity>
        <Text style={styles.contatoTitle}>Telefone de Contato:</Text>
        <Text style={styles.contato}>(28)99947-5001 Só whatsapp</Text>
      </View>
    </View>
  );
};

const pizzas = [
  {
    sabor: "Calabresa",
    precoP: 40,
    precoM: 50,
    precoG: 70,
    precoAntigo: 120 // Defina o preço antigo conforme necessário
  },
  {
    sabor: "Quatro Queijos",
    precoP: 40,
    precoM: 50,
    precoG: 70,
    precoAntigo: 110 // Defina o preço antigo conforme necessário
  },
  {
    sabor: "Portuguesa",
    precoP: 50,
    precoM: 60,
    precoG: 85,
    precoAntigo: 120
  }
  // Adicione mais pizzas conforme necessário
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#e35252',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'black',
    paddingTop: 20,
    width: '90%', // Definindo o width como 90%
    alignItems: 'center',
  },
  contatoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  contato: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cardapio;
