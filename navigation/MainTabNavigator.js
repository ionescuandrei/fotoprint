import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import Foto_clasic from "../screens/Foto_clasic";
import foto_pass from "../screens/foto_pass";
import Header from "../components/header";
import PickImageScreen from "../screens/PickImageScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Foto_clasic: Foto_clasic,
    foto_mag: foto_pass,
    PickImageScreen: PickImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitle: () => <Header />
    }
  }
);

export default HomeStack;
