import React, { useEffect, useState } from "react";
import { firebase_db } from "../firebaseConfig";
import * as Application from "expo-application";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    LogBox,
} from "react-native";
import Card from "../components/Card";
import LikeCard from "../components/LikeCard";
import Loading from "../components/Loading";

LogBox.ignoreAllLogs();

export default function LikePage({ navigation }) {
    const [ready, setReady] = useState(true);
    const [tip, setTip]: object[] = useState([]);

    const isIOS = Platform.OS === "ios";

    useEffect(() => {
        let uniqueId = Application.androidId;

        console.log(uniqueId);

        firebase_db
            .ref("/like/" + uniqueId)
            .once("value")
            .then((snapshot) => {
                console.log("파이어베이스에서 찜 데이터 가져왔습니다!!");
                let tip = snapshot.val();
                console.log("불러온 팁>>>>>", tip);

                if (tip === null) {
                    setReady(false);
                } else {
                    setTip(Object.values(tip));
                    setReady(false);
                }
            });
    }, []);

    const reload = () => {
        let uniqueId = Application.androidId;

        console.log(uniqueId);

        firebase_db
            .ref("/like/" + uniqueId)
            .once("value")
            .then((snapshot) => {
                console.log("파이어베이스에서 찜 데이터 가져왔습니다!!");
                let tip = snapshot.val();
                console.log("불러온 팁>>>>>", tip);

                if (tip === null) {
                    setReady(false);
                } else {
                    setTip(Object.values(tip));
                    setReady(false);
                }
            });
    };

    return ready ? (
        <Loading />
    ) : (
        <View>
            {tip === null ? (
                <></>
            ) : (
                <ScrollView style={styles.cardContainer}>
                    {/* 하나의 카드 영역을 나타내는 View */}
                    {tip.map((content, i) => {
                        return (
                            <LikeCard
                                content={content}
                                key={i}
                                navigation={navigation}
                                reload={reload}
                            />
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
    },
});
