// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-13d60.firebaseapp.com",
  projectId: "mern-blog-13d60",
  storageBucket: "mern-blog-13d60.appspot.com",
  messagingSenderId: "60817273997",
  appId: "1:60817273997:web:f0fc8a5616707cff201ec4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);