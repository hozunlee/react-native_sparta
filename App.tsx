import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import main from "./assets/main.png";

export default function App() {
    console.disableYellowBox = true;

    const customAlert = (params) => {
        Alert.alert("클릭 완료");
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>나만의 꿀팁</Text>
            <Image
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c",
                }}
                resizeMode={"contain"}
                style={styles.imageStyle}
            />
            <ScrollView style={styles.middleCon} horizontal>
                <TouchableOpacity style={styles.btn} onPress={customAlert}>
                    <Text style={styles.btnText}>생활</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={customAlert}>
                    <Text style={styles.btnText}>재테크</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn3} onPress={customAlert}>
                    <Text style={styles.btnText}>반려견</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn4} onPress={customAlert}>
                    <Text style={styles.btnText}>꿀팁</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.secondContainer}>
                <Image
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3",
                    }}
                    style={styles.imageStyle1}
                />
                <View style={styles.containerOne}>
                    <Text style={styles.subTitle}>
                        먹다 남은 피자를 촉촉하게!
                    </Text>
                    <Text style={styles.subText} numberOfLines={3}>
                        먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게
                        먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지
                        안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을
                        수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고,
                        피자에 촉촉함을 더해줍니다.
                    </Text>
                    <Text style={styles.daily}>2022.04.13</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    secondContainer: {
        flexDirection: "row",
    },
    middleCon: {
        marginVertical: 20,
        marginLeft: 10,
        height: 60,
    },

    containerOne: {
        flex: 2,
        marginLeft: 3,
    },
    imageStyle: {
        width: "90%",
        height: 200,
        borderRadius: 10,
        margin: 10,
        alignSelf: "center",
    },
    imageStyle1: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5,
        flex: 1,
    },
    btn: {
        margin: 10,
        padding: 10,
        borderRadius: 10,

        height: 50,
        width: "30%",
        textAlign: "center",
        backgroundColor: "red",
        color: "#fff",
    },
    btn2: {
        margin: 10,
        padding: 10,
        borderRadius: 10,

        height: 50,
        width: "30%",
        textAlign: "center",
        backgroundColor: "blue",
        color: "#fff",
    },
    btn3: {
        margin: 10,
        padding: 10,
        borderRadius: 10,

        height: 50,
        width: "30%",
        textAlign: "center",
        backgroundColor: "grey",
        color: "#fff",
    },
    btn4: {
        margin: 10,
        padding: 10,
        borderRadius: 10,

        height: 50,
        width: "30%",
        textAlign: "center",
        backgroundColor: "yellow",
        color: "#fff",
    },

    btnText: {
        color: "#fff",
        textAlign: "center",
    },

    imgText: {
        flex: 1,
    },
    title: {
        fontSize: 50,
        marginTop: 30,
        marginLeft: 20,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subText: {
        fontSize: 16,
    },
    daily: {
        color: "grey",
        fontSize: 13,
    },
});
