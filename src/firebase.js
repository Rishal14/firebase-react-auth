// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE14qIIhpnxfPx0ItNDVnBNgB2vQPP__8",
  authDomain: "react-firebase-5e3d9.firebaseapp.com",
  projectId: "react-firebase-5e3d9",
  storageBucket: "react-firebase-5e3d9.appspot.com",
  messagingSenderId: "623309453344",
  appId: "1:623309453344:web:f609479c782318563de445",
  measurementId: "G-TZLCNDMVM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };