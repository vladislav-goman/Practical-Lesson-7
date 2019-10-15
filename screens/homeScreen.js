import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/header";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Header label="Welcome to Yet Another Great App!" bgColor="#FF5733" />
      <View style={styles.body}>
        <View style={styles.item}>
          <Text style={styles.title}>Hello There!</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>This is how I see lab 7</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Enjoy your UX!</Text>
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
    padding: 20,
    alignItems: "center"
  },
  item: {
    padding: 10
  },
  title: {
    fontSize: 22
  },
  title: {
    fontSize: 18
  }
});

export default HomeScreen;
