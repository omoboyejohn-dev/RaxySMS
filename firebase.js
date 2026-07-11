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

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyByJ-da2vnaRH-ySL0QoLENkK0uTMSgyG8",
    authDomain: "raxy-sms.firebaseapp.com",
    projectId: "raxy-sms",
    storageBucket: "raxy-sms.firebasestorage.app",
    messagingSenderId: "801661467553",
    appId: "1:801661467553:web:81eceac958bbbe1010a9e0",
    measurementId: "G-BDD2M9S500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
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
