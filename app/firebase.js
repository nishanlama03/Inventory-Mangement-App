// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmB_AXTMvD5vf9lTG9ffP-S3aS7HRHTqI",
  authDomain: "inventory-management-eedda.firebaseapp.com",
  projectId: "inventory-management-eedda",
  storageBucket: "inventory-management-eedda.appspot.com",
  messagingSenderId: "926500659682",
  appId: "1:926500659682:web:2c4b2dcda45ba72f8359bb",
  measurementId: "G-5HQ7LG2BFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export{
    app,
    firestore,
    firebaseConfig
};