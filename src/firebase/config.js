import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXJQy2RvrS6PiNB9kF8nGgFAelql_J9nM",
  authDomain: "fir-9b601.firebaseapp.com",
  projectId: "fir-9b601",
  storageBucket: "fir-9b601.appspot.com",
  messagingSenderId: "735507975901",
  appId: "1:735507975901:web:5bd1faa9663ce92cee1534",
  measurementId: "G-DZNY7PEFQ3",
};

export default firebase.initializeApp(firebaseConfig);
