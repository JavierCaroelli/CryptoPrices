import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>CryptoCoins</Text>
    </View>
  );
};

export default Header;
