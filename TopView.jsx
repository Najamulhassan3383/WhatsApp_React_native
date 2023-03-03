import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import Header from "./Header";
// import Bar from "./Bar";
export default function TopView(props) {
  //when props.backbutton is true, show the button component  else don't show it

  return (
    <View>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
