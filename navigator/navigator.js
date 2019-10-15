import React from "react";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen";
import InfoScreen from "../screens/infoScreen";
import BaterryScreen from "../screens/baterryScreen";
import ContactsScreen from "../screens/contactsScreen";

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-home" size={23} color={tabInfo.tintColor} />
        ),
        tabBarColor: "#FF5733"
      }
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarLabel: "Info",
        tabBarIcon: tabInfo => (
          <Ionicons
            name="ios-phone-portrait"
            size={23}
            color={tabInfo.tintColor}
          />
        ),
        tabBarColor: "#C70039"
      }
    },
    Contacts: {
      screen: ContactsScreen,
      navigationOptions: {
        tabBarLabel: "Contacts",
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-contacts" size={23} color={tabInfo.tintColor} />
        ),
        tabBarColor: "#900C3F"
      }
    },
    Battery: {
      screen: BaterryScreen,
      navigationOptions: {
        tabBarLabel: "Battery",
        tabBarIcon: tabInfo => (
          <Ionicons
            name="ios-battery-charging"
            size={23}
            color={tabInfo.tintColor}
          />
        ),
        tabBarColor: "#581845"
      }
    }
  },
  {
    activeColor: "white",
    shifting: true
  }
);

export default createAppContainer(MainNavigator);
