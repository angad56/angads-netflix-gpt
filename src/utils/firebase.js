// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGU5Zft9QnQxFb4cSvwBDlMnVQ4kxQyEQ",
  authDomain: "netflixgpt-eec7e.firebaseapp.com",
  projectId: "netflixgpt-eec7e",
  storageBucket: "netflixgpt-eec7e.appspot.com",
  messagingSenderId: "383001287198",
  appId: "1:383001287198:web:febe8b4fc5dcceabe8ec0f",
  measurementId: "G-JCM6WR7EPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
