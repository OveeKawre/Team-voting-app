import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZmtXiiE8QqwsiYHqjWMFTN40PXPmxZVA",
  authDomain: "team-voting-app-pro-c67.firebaseapp.com",
  databaseURL: "https://team-voting-app-pro-c67-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-pro-c67",
  storageBucket: "team-voting-app-pro-c67.appspot.com",
  messagingSenderId: "622801315565",
  appId: "1:622801315565:web:83fdeccc25ac5011ef4ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();