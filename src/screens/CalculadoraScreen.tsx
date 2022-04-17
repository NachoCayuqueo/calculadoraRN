import React from 'react';
import {View, Text} from 'react-native';
import {Boton} from '../components/Boton';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        <Boton texto="C" color="#9b9b9b" />
        <Boton texto="+/-" color="#9b9b9b" />
        <Boton texto="del" color="#9b9b9b" />
        <Boton texto="/" color="#ff9427" />
      </View>
    </View>
  );
};
