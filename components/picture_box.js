import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import Colors from "../constants/Colors";
let window = Dimensions.get("screen");
const componentName = props => (
  <ImageBackground source={props.image} style={styles.articlePreview}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.previewText}>{props.optionText}</Text>
      </View>
    </View>
  </ImageBackground>
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  articlePreview: {
    flex: 1,
    height: window.height / 3.2,
    width: window.width - 10,
    flexDirection: "column",
    marginBottom: 5,
    marginHorizontal: 5
  },
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: window.height / 150
  },
  previewText: {
    fontSize: 23,
    color: Colors.textColor,
    // alignSelf: "center",
    textAlign: "center",
    margin: 5,
    position: "absolute",
    top: 180,
    right: 10,
    bottom: 0,
    left: 10,
    backgroundColor: Colors.tintColor,
    opacity: 0.7,
    borderRadius: 10
  }
});
export default componentName;
