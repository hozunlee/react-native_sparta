import React from "react";
import main from "./assets/main.png";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    LogBox,
} from "react-native";

import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs();

export default function About() {
    const link = () => {
        Linking.openURL("https://www.instagram.com/common.hoya/");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>
                HI! 스파르타코딩 앱개발을 시작했습니다. 잘부탁드립니다!
            </Text>
            <View style={styles.subContainer}>
                <Image
                    style={styles.mainImage}
                    resizeMode={"cover"}
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4",
                    }}
                />
                <Text style={styles.mainText}>
                    많은 내용을 간결하게 배우려 노력했습니다!
                </Text>
                <Text style={styles.subText}>
                    꼭 완주해서 나의 것으로 만들어 가겠습니다.
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => link()}>
                    <Text style={styles.btnText}>인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        backgroundColor: "#219ebc",
        height: "100%",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginVertical: 40,
        textAlign: "center",
        marginHorizontal: 50,
    },
    subContainer: {
        //앱의 배경 색
        backgroundColor: "white",
        width: "80%",
        height: "60%",
        borderRadius: 30,
        alignSelf: "center",
    },
    mainImage: {
        width: 200,
        height: 150,
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 10,
    },
    mainText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    subText: {
        fontSize: 15,
        textAlign: "center",
        margin: 5,
    },
    btn: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        borderColor: "deeppink",
        borderRadius: 15,
        margin: 7,
        alignSelf: "center",
    },
    btnText: {
        textAlign: "center",
        color: "white",
    },
});
