import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import * as Device from "expo-device";

import Header from "../components/header";

const getTime = milisec => {
  const secondsAtAll = milisec / 1000;
  const days = Math.floor(secondsAtAll / (60 * 60 * 24));
  const hours = Math.floor((secondsAtAll - days * (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor(
    (secondsAtAll - days * (60 * 60 * 24) - hours * (60 * 60)) / 60
  );
  const seconds = Math.floor(
    secondsAtAll - days * (60 * 60 * 24) - hours * (60 * 60) - minutes * 60
  );
  return `${days < 10 ? `0${days}` : days}:${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

const InfoScreen = () => {
  const [upTime, setUpTime] = useState(null);

  Device.getUptimeAsync().then(time => setUpTime(time));

  return (
    <View style={styles.screen}>
      <Header label="Your Device Info" bgColor="#C70039" />
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>Running on virtual device: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Device.isDevice ? "No" : "Yes"}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>Brand: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Device.brand}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>Model: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Device.modelName}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>OS: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Platform.OS}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>OS Version: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Device.osVersion}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>Device Name: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{Device.deviceName}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.text}>uptime since the last reboot: </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>
              {" "}
              {upTime ? getTime(upTime) : "loading.."}
            </Text>
          </View>
        </View>
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
    padding: 20
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  text: {
    textAlign: "right",
    textTransform: "capitalize"
  }
});

export default InfoScreen;
