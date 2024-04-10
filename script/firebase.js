import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5BwMLrRFgoSKrbAkqFcJpSXfyGFRWoMI",
    authDomain: "virtual-space-d2855.firebaseapp.com",
    databaseURL: "https://virtual-space-d2855-default-rtdb.firebaseio.com",
    projectId: "virtual-space-d2855",
    storageBucket: "virtual-space-d2855.appspot.com",
    messagingSenderId: "884133083454",
    appId: "1:884133083454:web:ca908ee4f72403d018d46f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth();

// Get submit button
const submit = document.getElementById('submit');

// Add event listener for submit button click
submit.addEventListener("click", function(event) {

    console.log("this function is called");
    event.preventDefault(); // Prevent form submission

    // Get email and password from input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            const user = userCredential.user;
            alert('Account created successfully');
        })
        .catch((error) => {
            // An error occurred during account creation
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage); // Alert the error message to the user
        });
});
