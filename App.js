import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Header from "./components/Header";
import Form from "./components/Form";
import Price from "./components/Price";
import styles from "./components/styles";
import axios from "axios";

export default function App() {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");

  const [newApiConsult, setNewApiConsult] = useState(false);
  const [priceResult, setPriceResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const convert = async () => {
      if (newApiConsult) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const result = await axios.get(url);
        setLoading(true);
        setTimeout(() => {
          setPriceResult(result.data.DISPLAY[crypto][coin]);
          setNewApiConsult(false);
          setLoading(false);
        }, 650);
      }
    };
    convert();
  }, [newApiConsult]);

  const spinner = loading ? (
    <ActivityIndicator style={styles.spinner} size={100} color="#4981e2" />
  ) : (
    <Price crypto={crypto} priceResult={priceResult} />
  );

  const [loaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Header />
      <Image style={styles.image} source={require("./assets/img/cryptomonedas.png")} />
      <View style={styles.content}>
        <Form
          coin={coin}
          crypto={crypto}
          setCoin={setCoin}
          setCrypto={setCrypto}
          setNewApiConsult={setNewApiConsult}
        />
      </View>
      {spinner}
    </>
  );
}
