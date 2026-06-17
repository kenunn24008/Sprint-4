// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_4O_We82i8ttBcYj6sP_W8w3p0EbT3XQ",
  authDomain: "cse310-sprint-4.firebaseapp.com",
  projectId: "cse310-sprint-4",
  storageBucket: "cse310-sprint-4.firebasestorage.app",
  messagingSenderId: "319630198728",
  appId: "1:319630198728:web:394118a397ec8ed3d6e2fd",
  measurementId: "G-CWKDSN2NWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);