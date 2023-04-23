// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPd7_OhIgkQxFytHVLTILb4ZMErGDK-7k",
  authDomain: "ema-jhon-with-firebase-a-42cd8.firebaseapp.com",
  projectId: "ema-jhon-with-firebase-a-42cd8",
  storageBucket: "ema-jhon-with-firebase-a-42cd8.appspot.com",
  messagingSenderId: "107584422721",
  appId: "1:107584422721:web:21d4c80815859c10f717c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;