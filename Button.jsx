import React from "react";
import { View, Text, Image } from "react-native";
import PictureCard from "./PictureCard";

export default function Button() {
  return <PictureCard source={require("./assets/back.png")}></PictureCard>;
}
