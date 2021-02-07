

  import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXr9vvpANgqhaM3A2SLQ-hLKDAPV1yshw",
    authDomain: "react-contact-form-43b11.firebaseapp.com",
    projectId: "react-contact-form-43b11",
    storageBucket: "react-contact-form-43b11.appspot.com",
    messagingSenderId: "986811876321",
    appId: "1:986811876321:web:5cc1b7d4431046f6b448a0",
    measurementId: "G-RZ40SP7X7X"
});

firebase.analytics();
var db = firebaseApp.firestore();

export { db };