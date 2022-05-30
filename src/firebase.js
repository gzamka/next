// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBASncoFHm9SgWgwPNG5vwd5SPru3vBTrc",
  authDomain: "grocery-ad589.firebaseapp.com",
  projectId: "grocery-ad589",
  storageBucket: "grocery-ad589.appspot.com",
  messagingSenderId: "437347665187",
  appId: "1:437347665187:web:5091b8b902caeb3706f896"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);