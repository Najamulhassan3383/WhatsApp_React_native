import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Bar() {
  //create a bar of whatsapp in which we have chats, status and calls

  return (
    <View style={styles.bar}>
      <Text style={styles.text1}>Chats</Text>

      <Text style={styles.text}>Status</Text>
      <Text style={styles.text}>Calls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#128C7E",
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
});
