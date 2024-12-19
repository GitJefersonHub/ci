import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Entypo from '@expo/vector-icons/Entypo';


import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App: React.FC = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [gasConsumption, setGasConsumption] = useState('');
  const [ethanolConsumption, setEthanolConsumption] = useState('');
  const [result, setResult] = useState('');
  const [additionalKm, setAdditionalKm] = useState('');
  const [showButtons, setShowButtons] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [showConsumptionInputs, setShowConsumptionInputs] = useState(false);
  const [showCalculateButton, setShowCalculateButton] = useState(true);
  const [showResetButton, setShowResetButton] = useState(false);

  // Funções de Validação
  const validatePrice = (price: string) => {
    const regex = /^\d{1,2}[.,]\d{2}$/;
    return regex.test(price);
  };

  const validateConsumption = (consumption: string) => {
    const regex = /^\d{1,2}([.,]\d{2})?$/;
    return regex.test(consumption);
  };

  // Função de Cálculo Padrão
  const handleCalculate = () => {
    if (!validatePrice(gasPrice) || !validatePrice(ethanolPrice)) {
      Alert.alert('Preço conforme o modelo: 0.00 ou 00.00');
      return;
    }

    const gasPriceNum = parseFloat(gasPrice.replace(',', '.'));
    const ethanolPriceNum = parseFloat(ethanolPrice.replace(',', '.'));
    const gasConsumptionStandard = 13; // Consumo médio na gasolina (km/l)
    const ethanolConsumptionStandard = 9; // Consumo médio no álcool (km/l)
    const gasCostPerKm = gasPriceNum / gasConsumptionStandard;
    const ethanolCostPerKm = ethanolPriceNum / ethanolConsumptionStandard;

    if (ethanolCostPerKm < gasCostPerKm) {
      const kmMore = (gasCostPerKm - ethanolCostPerKm) * gasConsumptionStandard;
      setResult('ÁLCOOL');
      setAdditionalKm(`Média de: ${kmMore.toFixed(2)} km a mais por litro.`);
    } else {
      const kmMore = (ethanolCostPerKm - gasCostPerKm) * ethanolConsumptionStandard;
      setResult('GASOLINA');
      setAdditionalKm(`Média de: ${kmMore.toFixed(2)} km a mais por litro.`);
    }

    setShowButtons(false); // Esconde os botões após o cálculo do botão Veículo Popular
    setShowTitle(false); // Esconde o título após o cálculo do Veículo Popular
    setShowCalculateButton(false); // Esconde o botão Calcular
    setShowResetButton(true); // Mostra o botão Resetar
  };

  // Função para Mostrar Inputs de Consumo
  const handleShowConsumptionInputs = () => {
    if (!validatePrice(gasPrice) || !validatePrice(ethanolPrice)) {
      Alert.alert('Preço conforme o modelo: 0.00 ou 00.00');
      return;
    }

    setShowConsumptionInputs(true); // Acrescenta botões de input km/litros
    setShowButtons(false); // Esconde os botões ao exibir os inputs de consumo
    setShowTitle(false); // Esconde o título ao exibir os inputs de consumo
    setShowResetButton(true); // Mostra o botão Resetar
  };

  // Função de Cálculo Personalizado
  const handleCalculateCustom = () => {
    if (!validateConsumption(gasConsumption) || !validateConsumption(ethanolConsumption)) {
      Alert.alert('Km/l conforme o modelo: 00 ou 00.00');
      return;
    }

    const gasPriceNum = parseFloat(gasPrice.replace(',', '.'));
    const ethanolPriceNum = parseFloat(ethanolPrice.replace(',', '.'));
    const gasConsumptionNum = parseFloat(gasConsumption.replace(',', '.'));
    const ethanolConsumptionNum = parseFloat(ethanolConsumption.replace(',', '.'));
    const gasCostPerKm = gasPriceNum / gasConsumptionNum;
    const ethanolCostPerKm = ethanolPriceNum / ethanolConsumptionNum;

    if (ethanolCostPerKm < gasCostPerKm) {
      const kmMore = (gasCostPerKm - ethanolCostPerKm) * gasConsumptionNum;
      setResult('ÁLCOOL');
      setAdditionalKm(`Média de: ${kmMore.toFixed(2)} km a mais por litro.`);
    } else {
      const kmMore = (ethanolCostPerKm - gasCostPerKm) * ethanolConsumptionNum;
      setResult('GASOLINA');
      setAdditionalKm(`Média de: ${kmMore.toFixed(2)} km a mais por litro.`);
    }

    setShowCalculateButton(false); // Esconde o botão Calcular
    setShowResetButton(true); // Mostra o botão Resetar
  };
  // Função de Reset
  const handleReset = () => {
    setGasPrice('');
    setEthanolPrice('');
    setGasConsumption('');
    setEthanolConsumption('');
    setResult('');
    setAdditionalKm('');
    setShowButtons(true);
    setShowTitle(true); // Mostra o título novamente ao resetar
    setShowConsumptionInputs(false);
    setShowCalculateButton(true); // Mostra o botão Calcular novamente
    setShowResetButton(false); // Esconde o botão Resetar
  };
  // Renderização do Componente
  return (
    <ImageBackground
      source={require('@/assets/images/3.jpg')} // Substitua pelo caminho correto da sua imagem
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {showTitle && <Text style={styles.title}>Combustível Inteligente</Text>}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="RS - 0.00"
              keyboardType="numeric"
              value={gasPrice}
              onChangeText={setGasPrice}
            />
            <Text style={[styles.label, { color: 'yellow' }]}>Gasolina</Text>
            {showButtons && (
              <TouchableOpacity style={styles.popularButton} onPress={handleCalculate}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Veículo Popular</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="RS - 0.00"
              keyboardType="numeric"
              value={ethanolPrice}
              onChangeText={setEthanolPrice}
            />
            <Text style={[styles.label, { color: 'yellow' }]}>Álcool</Text>
            {showButtons && (
              <TouchableOpacity style={styles.customButton} onPress={handleShowConsumptionInputs}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Meu Veículo</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {showConsumptionInputs && (
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Km/litros"
                keyboardType="numeric"
                value={gasConsumption}
                onChangeText={setGasConsumption}
              />
              <Text style={[styles.label, { color: 'gold' }]}>Média</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Km/litros"
                keyboardType="numeric"
                value={ethanolConsumption}
                onChangeText={setEthanolConsumption}
              />
              <Text style={[styles.label, { color: 'gold' }]}>Média</Text>
            </View>
          </View>
        )}
        {showConsumptionInputs && showCalculateButton && (
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateCustom}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Calcular</Text>
          </TouchableOpacity>
        )}
        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}><Text style={styles.resultOption}>{result}</Text></Text>
            <Text style={styles.resultText}><Text style={styles.resultKm}>{additionalKm}</Text></Text>
          </View>
        )}
        {showResetButton && (
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Resetar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

// Estilização dos componentes
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adiciona um fundo semi-transparente
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#00FF00',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  //Botões de input
  input: {
    height: 60,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 10,
  },
  //Textos de identificação dos botões de input
  label: {
    fontSize: 16,
  },
  //Botão Veículo Popular
  popularButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  //Botão Meu Veículo
  customButton: {
    backgroundColor: '#CD853F',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  //Botão Calcular
  calculateButton: {
    backgroundColor: '#CD853F',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '94%',
  },
  //Texto dos botões
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
  resultOption: {
    fontWeight: 'bold',
    color: 'yellow',
  },
  resultKm: {
    fontSize: 16,
    color: 'white',
  },
  //Botão Resetar
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '94%',
  },
});

<Entypo name="info-with-circle" size={24} color="black" />

export default App;