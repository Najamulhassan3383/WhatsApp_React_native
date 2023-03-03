import React from "react";
import { View, Text } from "react-native";

const UnreadMessages = ({ count }) => (
  <View
    style={{
      backgroundColor: "green",
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 500,
      minWidth: 20,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 50,
      top: 35,
    }}
  >
    <Text style={{ color: "white", fontSize: 12 }}>{count}</Text>
  </View>
);
export default UnreadMessages;
