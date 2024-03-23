import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarrinhoPage = ({ route }) => {
  const { itensCarrinho } = route.params;

  // Função para somar os preços dos itens do carrinho
  const calcularTotal = () => {
    let total = 0;
    itensCarrinho.forEach(item => {
      total += item.precoSelecionado;
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      {itensCarrinho.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.sabor} - Tamanho: {item.tamanhoSelecionado}</Text>
          <Text style={styles.itemText}>Preço: R$ {item.precoSelecionado} </Text>
        </View>
      ))}
      {/* Exibir total do carrinho */}
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e35252',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  itemText: {
    fontSize: 18,
    color: 'green',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CarrinhoPage;
