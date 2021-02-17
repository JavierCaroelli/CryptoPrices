import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";

const Price = ({ crypto, priceResult }) => {
  if (Object.keys(priceResult).length === 0) return null;

  return (
    <View style={styles.priceView}>
      <Text style={styles.priceText}>
        Precio del {crypto}: <Text style={styles.priceSpan}>{priceResult.PRICE}</Text>
      </Text>
      <Text style={styles.priceText}>
        Precio más alto del día: <Text style={styles.priceSpan}>{priceResult.HIGHDAY}</Text>
      </Text>
      <Text style={styles.priceText}>
        Precio más bajo del día: <Text style={styles.priceSpan}>{priceResult.LOWDAY}</Text>
      </Text>
      <Text style={styles.priceText}>
        Variación últimas 24hs:{" "}
        <Text style={styles.priceSpan}>{priceResult.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.priceText}>
        Última Actualización: <Text style={styles.priceSpan}>{priceResult.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

export default Price;
