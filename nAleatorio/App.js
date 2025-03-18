import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, Image } from 'react-native';

export default function App() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);

    if (isNaN(minNum) || isNaN(maxNum)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para mínimo e máximo.');
      return;
    }

    if (minNum >= maxNum) {
      Alert.alert('Erro', 'O valor mínimo deve ser menor que o valor máximo.');
      return;
    }

    const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setRandomNumber(random);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Caminho da imagem
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor mínimo"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor máximo"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />
      <Button title="Gerar Número Aleatório" onPress={generateRandomNumber} />
      {randomNumber !== null && (
        <Text style={styles.result}>Número Aleatório: {randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  image: {
    width: 150, // Largura da imagem
    height: 150, // Altura da imagem
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
});