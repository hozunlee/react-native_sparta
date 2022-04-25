import React from "react";

import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

LogBox.ignoreAllLogs();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="black" />
            <StackNavigator />
        </NavigationContainer>
    );
}
