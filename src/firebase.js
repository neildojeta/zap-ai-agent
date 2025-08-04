// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8TKJIoM9hrUzTNwM-1J8SshZ5rgPTRUk",
  authDomain: "zap-ai-agent.firebaseapp.com",
  projectId: "zap-ai-agent",
  storageBucket: "zap-ai-agent.firebasestorage.app",
  messagingSenderId: "1015450718546",
  appId: "1:1015450718546:web:05dc16dcfe0244e24c6a8b",
  measurementId: "G-FBXQ150604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);