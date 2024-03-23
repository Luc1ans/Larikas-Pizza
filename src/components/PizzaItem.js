import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

type Props = {
  sabor: string;
  precoP: number;
  precoM: number;
  precoG: number;
  adicionarAoCarrinho: (pizza: any, tamanhoSelecionado: string, precoSelecionado: number) => void;
};

const PizzaItem = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

   function calcularDesconto(precoNovo: number, precoAntigo: number) {
    return precoAntigo ? ((precoAntigo - precoNovo) / precoAntigo) * 100 : 0;
  }

  function aplicarDescontoEspecial(precoNovo: number) {
    const percentualDescontoEspecial = 20; // Porcentagem adicional de desconto especial
    return precoNovo * (1 - percentualDescontoEspecial / 100);
  }

  let precoGComDesconto = props.precoG;
  let descontoText: any = "Desconto";

  const [count, setCount] = useState(false);
  const onPress = () => setCount(!count);

  if (props.precoAntigo) {
    const descontoPercentual = calcularDesconto(props.precoG, props.precoAntigo);
    if (descontoPercentual > 20) {
      precoGComDesconto = aplicarDescontoEspecial(props.precoG);
      descontoText = <Text style={{ color: "yellow" }}>Desconto Especial Sinistro</Text>;
    }
  }

  const toggleShowSizes = () => {
    setShowSizes(!showSizes);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleShowSizes}>
        <Text style={styles.sabor}>{props.sabor}</Text>
      </TouchableOpacity>

      {showSizes && (
        <View>
          <Text style={styles.preco}>
            Tamanho P: R${props.precoP}
            <RadioButton
              value="Pequena"
              status={checked === 'Pequena' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Pequena')}
            />
          </Text>

          <Text style={styles.preco}>
            Tamanho M: R${props.precoM}
            <RadioButton
              value="Média"
              status={checked === 'Média' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Média')}
            />
          </Text>

          <Text style={styles.preco}>
            Tamanho G: R${props.precoG}
            <RadioButton
              value="Grande"
              status={checked === 'Grande' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Grande')}
            />
          </Text>

          <TouchableOpacity onPress={() => props.adicionarAoCarrinho(props, checked, props.precoSelecionado(props, checked))} style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      )}

      {props.precoAntigo !== undefined && (
        <>
          <Text>Preço Antigo: R${props.precoAntigo.toFixed(2)}</Text>
      
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginBottom: 10,
    width: '90%',
    fontFamily: 'Arial',
  },
  sabor: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 23
  },
  preco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    marginBottom: 5,
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default PizzaItem;
