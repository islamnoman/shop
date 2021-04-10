import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcPSWe6mecG8SPEAf_L5NprhW-EVUvESk",
    authDomain: "clone-53dd7.firebaseapp.com",
    projectId: "clone-53dd7",
    storageBucket: "clone-53dd7.appspot.com",
    messagingSenderId: "16310662718",
    appId: "1:16310662718:web:84602f3eddceb751b7c36f",
    measurementId: "G-Y5P7D1VJ6T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };