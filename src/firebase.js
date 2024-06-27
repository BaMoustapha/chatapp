import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUnhJKF_7T7jJH3VE8obaarJ2JUEpJ0Wg",
  authDomain: "chatapp-cf1cf.firebaseapp.com",
  projectId: "chatapp-cf1cf",
  storageBucket: "chatapp-cf1cf.appspot.com",
  messagingSenderId: "275559039279",
  appId: "1:275559039279:web:5ab7487068de5a5eb6e1da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
