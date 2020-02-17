import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Foto_clasic extends Component {
  state = { checked1: false, checked2: false };

  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://images.freeimages.com/images/large-previews/716/flower-1372780.jpg"
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Alege dimensiunea
        </Text>

        <CheckBox
          title="9x13 cm."
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />

        <CheckBox
          title="10x15 cm"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />
        <CheckBox
          title="13x18 cm"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />
        <CheckBox
          title="15x21 cm"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />
        <CheckBox
          title="Ambalate in cutie de cadou"
          checked={this.state.checked2}
          onPress={() => this.setState({ checked2: !this.state.checked1 })}
        />
        <View>
          <Button
            icon={<Icon name="arrow-right" size={30} color="white" />}
            title="Next"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 450,
    height: 255,
    marginBottom: 5
  }
});
