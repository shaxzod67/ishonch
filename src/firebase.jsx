
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0zfO3V-0dOAabhTd6XfGs5vWYpKzT-Tk",
  authDomain: "signup-4a434.firebaseapp.com",
  projectId: "signup-4a434",
  storageBucket: "signup-4a434.appspot.com",
  messagingSenderId: "949567214116",
  appId: "1:949567214116:web:3128ef5043848527cdfeb1",
  measurementId: "G-0TRVPGVKY2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);