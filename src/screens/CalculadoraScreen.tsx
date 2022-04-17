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
      <View style={styles.fila}>
        <Boton texto="7" />
        <Boton texto="8" />
        <Boton texto="9" />
        <Boton texto="X" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <Boton texto="4" />
        <Boton texto="5" />
        <Boton texto="6" />
        <Boton texto="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <Boton texto="1" />
        <Boton texto="2" />
        <Boton texto="3" />
        <Boton texto="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <Boton texto="0" ancho />
        <Boton texto="." />
        <Boton texto="=" color="#ff9427" />
      </View>
    </View>
  );
};
