import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Bar from "./Bar";
import { FaCamera } from "react-icons/fa";
const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.logo}>WhatsApp</Text>
        <View style={styles.rightIcons}>{/* <Text>{FaCamera}</Text> */}</View>
      </View>
      <Bar />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#128C7E",
    paddingHorizontal: 12,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
