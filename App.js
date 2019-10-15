import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useScreens } from "react-native-screens";
// improving performance
useScreens();

import Navigator from "./navigator/navigator";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
}
