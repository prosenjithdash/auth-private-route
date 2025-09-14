// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgaS3B9WdtG1fLOgNgfVDd1Nx9BFh9qEo",
  authDomain: "auth-private-route-8af0b.firebaseapp.com",
  projectId: "auth-private-route-8af0b",
  storageBucket: "auth-private-route-8af0b.firebasestorage.app",
  messagingSenderId: "553984460750",
  appId: "1:553984460750:web:0ef0fb4e4ac580cd078d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;