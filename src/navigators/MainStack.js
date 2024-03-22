import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cardapio from '../pages/CardapioPage';
import Carrinho from '../pages/CarrinhoPage';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Cardapio" component={Cardapio} />
    <MainStack.Screen name="Carrinho" component={Carrinho} />
  </MainStack.Navigator>  
);