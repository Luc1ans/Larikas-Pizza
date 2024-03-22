import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

type Props = {
  sabor: string;
  precoP: number;
  precoM: number;
  precoG: number;
  precoAntigo?: number;
}


const PizzaItem = (props: Props) => {
  function calcularDesconto(precoNovo: number, precoAntigo: number) {
    return precoAntigo ? ((precoAntigo - precoNovo) / precoAntigo) * 100 : 0;
  }
    const [checked, setChecked] = React.useState('first');

  function aplicarDescontoEspecial(precoNovo: number) {
    const percentualDescontoEspecial = 20; // Porcentagem adicional de desconto especial
    return precoNovo * (1 - percentualDescontoEspecial / 100);
  }

  let precoGComDesconto = props.precoG;
  let descontoText = "Desconto";

  const [count, setCount] = useState(false);
  const onPress = () => setCount(!count);

  if (props.precoAntigo) {
    const descontoPercentual = calcularDesconto(props.precoG, props.precoAntigo);
    if (descontoPercentual > 20) {
      precoGComDesconto = aplicarDescontoEspecial(props.precoG);
      descontoText = <Text style={{ color: "yellow" }}>Desconto Especial Sinistro</Text>;
    }
  }
  

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress = {onPress}>
    
      <Text style={styles.sabor}>{props.sabor}</Text>
      </TouchableOpacity>
      {count == 1 && (
        <View>
        <View>
      <Text style={styles.preco}>
      Tamanho P: R${props.precoP.toFixed(2)}</Text>
      
      <View id="buttonRa">
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
    </View>   

      <Text style={styles.preco}>Tamanho M: 
      R${props.precoM.toFixed(2)}</Text>

      <View id="buttonRa"> 
       <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
      <Text style={styles.preco}>Tamanho G:
      R${precoGComDesconto.toFixed(2)}

      <View id="buttonRa">
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />

      </View>
      <Text style={{ color: descontoText === "Desconto Especial" ? "yellow" : "green" }}>
        </Text>
      </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
      )}
      {props.precoAntigo !== undefined && (
        <>
          <Text>Preço Antigo: R${props.precoAntigo.toFixed(2)}</Text>
          <Text>
            {descontoText}: {calcularDesconto(props.precoG, props.precoAntigo).toFixed(0)}%
          </Text>
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
    width: '90%', // Definindo o width como 90%
    fontFamily: 'Arial', // Definindo a fonte como Arial
  },
  buttonRa: {
    marginLeft: 3,
    
  },
  sabor: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 23
  },
  preco: {
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
