import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Animated
} from "react-native";
import * as Permissions from "expo-permissions";
import ImageBrowser from "../components/MultipleImagePicker/ImageBrowser";

const { height } = Dimensions.get("screen");
class PickImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      height: height / 2
    };
  }

  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraRollPerm === "granted") {
      this.setState({ isOpen: true });
      console.log("permision", cameraRollPerm);
    }
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  handleImages = images => {
    console.log("picked images", images);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ImageBrowser
            onRequestClose={this.toggleModal}
            pickedImages={this.handleImages}
          />
        </View>
      </View>
    );
  }
}

export default PickImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 18,
    position: "absolute",
    bottom: 0,
    height: height / 1.2,
    borderTopWidth: 0.5,
    borderTopColor: "grey"
  },
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10
  }
});
