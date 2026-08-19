// firebase-config.js

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";


const firebaseConfig = {

    apiKey: "AIzaSyAuD2HIYRG0ZHq7KtfSjzexhq6NkXii5Qo",

    authDomain:
        "donkellyswiftdelivery.firebaseapp.com",

    projectId:
        "donkellyswiftdelivery",

    storageBucket:
        "donkellyswiftdelivery.firebasestorage.app",

    messagingSenderId:
        "547113841009",

    appId:
        "1:547113841009:web:a4c054dca08fc1f5b4c6d0",

    measurementId:
        "G-HFG8ENEEVB"
};


// Initialize Firebase

const app =
    initializeApp(firebaseConfig);


// Authentication

export const auth =
    getAuth(app);


// Firestore

export const db =
    getFirestore(app);


// Analytics

export const analytics =
    getAnalytics(app);
