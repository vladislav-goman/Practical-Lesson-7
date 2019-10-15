import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import * as Battery from "expo-battery";

import { Ionicons } from "@expo/vector-icons";

import Header from "../components/header";

const BaterryScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [wasPressed, setWasPressed] = useState(false);

  const _handleButtonPress = async () => {
    setWasPressed(true);
    const level = await Battery.getBatteryLevelAsync();
    setBatteryLevel(level);
  };

  const Content = (
    <View style={styles.batteryInfo}>
      <Text style={styles.batteryInfoText}>
        Your battery is {Math.trunc(batteryLevel * 10000) / 10000}% out of full
        charge.
      </Text>
      <View style={styles.icon}>
        <Ionicons size={256} name="ios-battery-dead" />
        <View style={{ ...styles.batteryBg, width: 186 * batteryLevel }}></View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Header label="Your Battery Status" bgColor="#581845" />
      <View style={styles.body}>
        <Button
          title="Load Battery Info"
          color="#581845"
          onPress={_handleButtonPress}
        />
        {wasPressed ? Content : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  batteryInfo: {
    marginTop: 30,
    alignItems: "center"
  },
  batteryInfoText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },
  icon: {
    marginTop: 30,
    width: 256,
    height: 256,
    transform: [{ rotate: "-90deg" }],
    position: "relative"
  },
  batteryBg: {
    zIndex: -1,
    position: "absolute",
    bottom: 84,
    left: 14,
    width: 186,
    height: 87,
    backgroundColor: "#00FF00"
  }
});

export default BaterryScreen;
