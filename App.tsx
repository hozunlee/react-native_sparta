import React from "react";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
    // return <MainPage />;
    // return <AboutPage />;
    return (
        <NavigationContainer>
            <StatusBar style="black" />
            {/* <DetailPage /> */}
            <StackNavigator />
            {/* <MainPage /> */}
        </NavigationContainer>
    );
}
