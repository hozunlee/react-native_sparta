//import * as firebase from 'firebase/app';

import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBbOCA0kFQxgbWkb0CZSNCQZ87mwjTKi7k",
    authDomain: "sparta-myhoneytip-june-40425.firebaseapp.com",
    projectId: "sparta-myhoneytip-june-40425",
    storageBucket: "sparta-myhoneytip-june-40425.appspot.com",
    messagingSenderId: "248528589634",
    appId: "1:248528589634:web:f02039c0d00fb6d80b2edb",
    measurementId: "G-NV7XDXBP25",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
