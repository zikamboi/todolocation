import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj0kqC1tfFUBLvsxLoHjfkDLtb63o5Fcs",
  authDomain: "vue-todo-app-1cb26.firebaseapp.com",
  projectId: "vue-todo-app-1cb26",
  storageBucket: "vue-todo-app-1cb26.appspot.com",
  messagingSenderId: "904336733424",
  appId: "1:904336733424:web:276e7d913acf25d6c13e35",
  measurementId: "G-GZH2EZWFHB",
};

// Initialize Firebase
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;
const app = initializeApp(firebaseConfig);
