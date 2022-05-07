import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else {
        //Evaluar si es otro cero y hay un punto
        if (numeroTexto === '0' && numero.includes('.')) {
          setNumero(numero + numeroTexto);
        } else {
          //Evaluar si es diferente de cero y no tiene punto
          if (numeroTexto !== '0' && !numero.includes('.')) {
            setNumero(numeroTexto);
          } else {
            //evitat 0000.0
            if (numeroTexto === '0' || !numero.includes('.')) {
              setNumero(numero);
            } else {
              setNumero(numero + numeroTexto);
            }
          }
        }
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    numero.includes('-')
      ? setNumero(numero.replace('-', ''))
      : setNumero('-' + numero);
  };

  const btnDelete = () => {
    console.log(numero.length);
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1)); //elimina la ultima pos
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    numero.endsWith('.')
      ? setNumeroAnterior(numero.slice(0, -1))
      : setNumeroAnterior(numero);

    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        num1 === 0
          ? setNumero('La división por 0 no esta definida')
          : setNumero(`${num1 / num2}`);
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return {
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
  };
};
