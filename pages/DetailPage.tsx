import React, { useEffect, useState } from "react";
import main from "./assets/main.png";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import data from "../data.json";

export default function DetailPage({ navigation, route }) {
    console.disableYellowBox = true;

    const [tip, setTip] = useState({});
    // let tip = data.tip;

    useEffect(() => {
        console.log(route);

        navigation.setOptions({
            //setOptions로 페이지 타이틀도 지정 가능하고
            title: route.params.title,
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다.
            headerStyle: {
                backgroundColor: "#000",
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        });
        setTip(route.params);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={styles.mainImage}
                resizeMode={"cover"}
                source={{
                    uri: tip.image,
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>{tip.title}</Text>
                <Text style={styles.subText}>{tip.desc}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>팁 찜하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        backgroundColor: "black",
        height: "100%",
    },
    mainImage: {
        width: "90%",
        height: "40%",
        alignSelf: "center",
        margin: 10,
        marginTop: 30,
        borderRadius: 10,
    },
    mainText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        color: "white",
    },
    subText: {
        fontSize: 15,
        textAlign: "center",
        margin: 5,
        color: "white",
    },
    btn: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        borderColor: "deeppink",
        borderRadius: 15,
        margin: 7,
    },
    btnText: {
        textAlign: "center",
        color: "white",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});
