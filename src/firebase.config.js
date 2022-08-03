// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIIeghrh1qmaGpX3kHxOQl7xorXiiOBOs",
  authDomain: "house-marketplace-app-a7f91.firebaseapp.com",
  projectId: "house-marketplace-app-a7f91",
  storageBucket: "house-marketplace-app-a7f91.appspot.com",
  messagingSenderId: "994055604320",
  appId: "1:994055604320:web:3936f6880cdf855fcb1b05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
