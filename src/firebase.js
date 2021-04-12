import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyApFTwnVdkI0dRA97fDmiVtCwsDo1pZ1Vs",
  authDomain: "clone-a5751.firebaseapp.com",
  projectId: "clone-a5751",
  storageBucket: "clone-a5751.appspot.com",
  messagingSenderId: "844713830094",
  appId: "1:844713830094:web:ecb3723a78d40ca6e9d29f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // Handles DB access
const auth = firebase.auth(); //Handles Authentication

export { db, auth };
