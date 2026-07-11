import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// HTML Elements
const walletBalance = document.getElementById("walletBalance");
const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");
const logoutBottom = document.getElementById("logoutBottom");

// Check authentication
onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {

            const data = userSnap.data();

            userName.textContent = `Welcome, ${data.name}`;

            walletBalance.textContent =
                `₦${Number(data.wallet || 0).toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`;

        } else {

            userName.textContent = user.displayName || "User";
            walletBalance.textContent = "₦0.00";

        }

    } catch (error) {

        console.error(error);
        alert("Failed to load your account.");

    }

});

// Logout Function
async function logout() {

    try {

        await signOut(auth);

        window.location.href = "login.html";

    } catch (error) {

        alert("Logout failed.");
        console.error(error);

    }

}

// Logout Buttons
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
    });
}

if (logoutBottom) {
    logoutBottom.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
    });
}
