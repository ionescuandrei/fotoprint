import React, { Component } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";

import PictureBox from "../components/picture_box";
import Header from "../components/header";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Foto_clasic")}
            >
              <PictureBox
                image={{
                  uri:
                    "https://images.freeimages.com/images/large-previews/716/flower-1372780.jpg"
                }}
                optionText={"Fotografii clasice"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("foto_mag")}
            >
              <PictureBox
                image={{
                  uri:
                    "https://images.unsplash.com/photo-1581294872524-bb98418535d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                }}
                optionText={"Fotografii magnetice"}
              />
            </TouchableOpacity>
            <PictureBox
              image={{
                uri:
                  "https://images.freeimages.com/images/large-previews/716/flower-1372780.jpg"
              }}
              optionText={"Printuri de dimensiuni mari"}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// HomeScreen.navigationOptions = {
//   headerTitle: () => <Header />
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    paddingTop: 3
  }
});
export default HomeScreen;
