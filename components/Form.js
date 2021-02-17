import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const Form = ({ coin, crypto, setCoin, setCrypto, setNewApiConsult }) => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setCryptos(result.data.Data);
    };
    consultAPI();
  }, []);

  const getCoin = (fiat) => {
    setCoin(fiat);
  };

  const getCrypto = (crypto) => {
    setCrypto(crypto);
  };

  const showAlert = () => {
    Alert.alert("Error...", "Both Fields Are Neccesary", [{ text: "OK" }]);
  };

  const showPrice = () => {
    if (coin.trim() === "" || crypto.trim() === "") {
      showAlert();
      return;
    }
    setNewApiConsult(true);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <View style={styles.picker}>
        <Picker selectedValue={coin} onValueChange={(fiat) => getCoin(fiat)}>
          <Picker.Item label="- Choose -" value="" />
          <Picker.Item label="US Dollar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Pound Sterling" value="GBP" />
          <Picker.Item label="Peso Argentino" value="ARS" />
        </Picker>
      </View>
      <Text style={styles.label}>CryptoCoin</Text>
      <View style={styles.picker}>
        <Picker selectedValue={crypto} onValueChange={(crypto) => getCrypto(crypto)}>
          <Picker.Item label="- Choose -" value="" />
          {cryptos &&
            cryptos.map((cripto) => (
              <Picker.Item
                key={cripto.CoinInfo.Id}
                label={cripto.CoinInfo.FullName}
                value={cripto.CoinInfo.Name}
              />
            ))}
        </Picker>
      </View>

      <TouchableHighlight onPress={() => showPrice()} style={styles.quoteBtn}>
        <Text style={styles.quoteText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Form;
