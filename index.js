// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfaYv-q1EDJwFxwwdsXElD7OFLCgQiKPc",
  authDomain: "nucleoweb-842b9.firebaseapp.com",
  databaseURL: "https://nucleoweb-842b9-default-rtdb.firebaseio.com",
  projectId: "nucleoweb-842b9",
  storageBucket: "nucleoweb-842b9.appspot.com",
  messagingSenderId: "930079540705",
  appId: "1:930079540705:web:9912bac3678960a3783ea0",
  measurementId: "G-X1VLBLLEC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index',{title:'Plantilla basic'});
});
module.exports = router;
