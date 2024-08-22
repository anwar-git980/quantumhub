// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOorFboC1jpBGrYCcbgN0p7-5T-FrwJ88",
    authDomain: "quantumhub-662bc.firebaseapp.com",
    projectId: "quantumhub-662bc",
    storageBucket: "quantumhub-662bc.appspot.com",
    messagingSenderId: "139243490549",
    appId: "1:139243490549:web:3f355100be94083ab989bc",
    measurementId: "G-TE3V9JXCW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}