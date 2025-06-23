
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCxnMfXQSpE8kDgdfQoysKNTIja13A38Lo",
  authDomain: "prepwise-be1cb.firebaseapp.com",
  databaseURL: "https://prepwise-be1cb-default-rtdb.firebaseio.com",
  projectId: "prepwise-be1cb",
  storageBucket: "prepwise-be1cb.firebasestorage.app",
  messagingSenderId: "474443121145",
  appId: "1:474443121145:web:88714461f9f90e04477d28",
  measurementId: "G-K4D2JLSVGD"
};

// Initialize Firebase
const app =!getApps.length ?  initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
