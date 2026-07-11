// ======================================
// Raxy-SMS Firebase Configuration
// ======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd2RYdabzYT86_PyMJZ6zxWQA5Vtgj3Bw",
    authDomain: "raxy-sms-ea4c2.firebaseapp.com",
    projectId: "raxy-sms-ea4c2",
    storageBucket: "raxy-sms-ea4c2.firebasestorage.app",
    messagingSenderId: "454128841738",
    appId: "1:454128841738:web:5ccd2c9096cdfe2f435bf3",
    measurementId: "G-JD4GY4YNCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Services
export {
    app,
    auth,
    db,
    storage
};
