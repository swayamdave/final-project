const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyA5BwMLrRFgoSKrbAkqFcJpSXfyGFRWoMI",
//   authDomain: "virtual-space-d2855.firebaseapp.com",
//   databaseURL: "https://virtual-space-d2855-default-rtdb.firebaseio.com",
//   projectId: "virtual-space-d2855",
//   storageBucket: "virtual-space-d2855.appspot.com",
//   messagingSenderId: "884133083454",
//   appId: "1:884133083454:web:ca908ee4f72403d018d46f"
// };
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig); 

// // Get login and signup forms
// const loginForm = document.querySelector('.form-box login');
// const signupForm = document.querySelector('.form-box signup');

// // Handle login form submission
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent form submission
//   const email = loginForm.querySelector('input[type="email"]').value;
//   const password = loginForm.querySelector('input[type="password"]').value;
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in successfully
//       const user = userCredential.user;
//       console.log("Logged in:", user);
//     })
//     .catch((error) => {
//       // Handle login errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Login error:", errorMessage);
//     })
//     .finally(() => {
//       // Enable the login button after authentication attempt
//       loginForm.querySelector('button[type="submit"]').disabled = false;
//     });

//   // Disable the login button to prevent multiple submissions
//   loginForm.querySelector('button[type="submit"]').disabled = true;
// });

// // Handle signup form submission
// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent form submission
//   const email = signupForm.querySelector('input[type="email"]').value;
//   const password = signupForm.querySelector('input[type="password"]').value;
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       const user = userCredential.user;
//       console.log("Signed up:", user);
//     })
//     .catch((error) => {
//       // Handle signup errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Signup error:", errorMessage);
//     })
//     .finally(() => {
//       // Enable the signup button after authentication attempt
//       signupForm.querySelector('button[type="submit"]').disabled = false;
//     });

//   // Disable the signup button to prevent multiple submissions
//   signupForm.querySelector('button[type="submit"]').disabled = true;
// });