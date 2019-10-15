import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableNativeFeedback,
  Alert
} from "react-native";

import * as Contacts from "expo-contacts";

import Header from "../components/header";

import verifyPermissions from "../utils/verifyPermissions";

const renderContact = ({ item }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        Alert.alert(
          `${item.firstName}`,
          item.phoneNumbers
            ? `Nubmer: ${item.phoneNumbers[0].number}`
            : "No number avalible.",
          [{ text: "okay" }]
        );
      }}
    >
      <View style={styles.contact}>
        <View style={styles.imageContainer}>
          {item.imageAvailable ? (
            <Image
              style={{ width: 32, height: 32 }}
              source={{ uri: item.image.uri }}
            />
          ) : null}
        </View>
        <View style={styles.nameContainer}>
          <Text>{item.firstName}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const ContactsScreen = () => {
  const [contactsArray, setContactsArray] = useState([]);
  const [wasPressed, setWasPressed] = useState(false);

  const _handleButtonPress = async () => {
    setWasPressed(true);
    const hasPermission = await verifyPermissions("CONTACTS");
    if (hasPermission) {
      const { data } = await Contacts.getContactsAsync();
      setContactsArray(data);
    }
  };

  const ButtonLoad = (
    <Button
      title="Load Contacts"
      color="#900C3F"
      onPress={_handleButtonPress}
    />
  );

  const Content =
    contactsArray.length === 0 ? (
      <Text>You might not have added any contacts.</Text>
    ) : (
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        data={contactsArray}
        keyExtractor={item => item.lookupKey}
        renderItem={renderContact}
      />
    );

  return (
    <View style={styles.screen}>
      <Header label="Your contacts" bgColor="#900C3F" />
      <View style={styles.body}>{!wasPressed ? ButtonLoad : Content}</View>
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
  contact: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  imageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "lightgray"
  },
  nameContainer: {
    marginLeft: 15
  }
});

export default ContactsScreen;
