import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWl_AXxvwBsLKHuY89eiLCsjsn2FDJn28",
  authDomain: "nfi-apps.firebaseapp.com",
  projectId: "nfi-apps",
  storageBucket: "nfi-apps.appspot.com",
  messagingSenderId: "580102998429",
  appId: "1:580102998429:web:e34d8519ceda9c38138774"
};

const app = initializeApp(firebaseConfig);

export { app, auth, firestore };
