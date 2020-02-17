import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>FotoPrint</Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tintColor
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 26,
    color: "rgb(238,238,238)",
    fontStyle: "italic",
    fontFamily: ""
  }
});
