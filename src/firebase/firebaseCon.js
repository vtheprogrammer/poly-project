// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DataSaverOff } from "@mui/icons-material";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACH37Ml1fVkTHAywGaZ4OuOfYgLTo-J2c",
  authDomain: "project-3af74.firebaseapp.com",
  databaseURL: "https://project-3af74-default-rtdb.firebaseio.com",
  projectId: "project-3af74",
  storageBucket: "project-3af74.appspot.com",
  messagingSenderId: "589089940143",
  appId: "1:589089940143:web:8017c2515ba0c66e902a5a",
  measurementId: "G-TQS61B9WPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// var database = firebase.database();

export default app;
