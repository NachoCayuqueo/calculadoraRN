import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 80,
    width: 80,
  },
  botonTexto: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  resultado: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'right',
    fontSize: 60,
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    fontSize: 30,
  },
});
