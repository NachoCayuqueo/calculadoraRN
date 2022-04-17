import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  color?: string;
  texto: string;
}

export const Boton = ({color = '#2d2d2d', texto}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  );
};
