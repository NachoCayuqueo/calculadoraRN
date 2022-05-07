import React from 'react';
import {View, Text} from 'react-native';
import {Boton} from '../components/Boton';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.container}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <Boton texto="C" color="#9b9b9b" accion={limpiar} />
        <Boton texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <Boton texto="del" color="#9b9b9b" accion={btnDelete} />
        <Boton texto="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" accion={armarNumero} />
        <Boton texto="8" accion={armarNumero} />
        <Boton texto="9" accion={armarNumero} />
        <Boton texto="X" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="4" accion={armarNumero} />
        <Boton texto="5" accion={armarNumero} />
        <Boton texto="6" accion={armarNumero} />
        <Boton texto="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="1" accion={armarNumero} />
        <Boton texto="2" accion={armarNumero} />
        <Boton texto="3" accion={armarNumero} />
        <Boton texto="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="0" ancho accion={armarNumero} />
        <Boton texto="." accion={armarNumero} />
        <Boton texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};
