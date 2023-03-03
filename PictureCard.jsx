import React from "react";
import { Image } from "react-native";

export default function PictureCard({ source }) {
  return (
    <Image
      source={source}
      style={{ width: 50, height: 50, borderRadius: 50, alignSelf: "center" }}
    />
  );
}
