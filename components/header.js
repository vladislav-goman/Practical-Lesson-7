import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({label, bgColor}) => {
    return (
        <View style={{...styles.header, backgroundColor: bgColor}}>
            <Text style={styles.title}>{label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  header: {
      paddingVertical: 20,
      paddingHorizontal: 40
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginTop: 15
  }
});

export default Header;