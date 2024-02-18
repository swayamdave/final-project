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

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5BwMLrRFgoSKrbAkqFcJpSXfyGFRWoMI",
  authDomain: "virtual-space-d2855.firebaseapp.com",
  databaseURL: "https://virtual-space-d2855-default-rtdb.firebaseio.com",
  projectId: "virtual-space-d2855",
  storageBucket: "virtual-space-d2855.appspot.com",
  messagingSenderId: "884133083454",
  appId: "1:884133083454:web:ca908ee4f72403d018d46f"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Get login and signup forms
const loginForm = document.querySelector('.form-box.login form');
const signupForm = document.querySelector('.form-box.signup form');

// Handle login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log('Login successful:', userCredential.user);
    // Handle successful login (e.g., redirect to another page)
  } catch (error) {
    console.error('Login error:', error.message);
    // Handle login error (e.g., display error message to user)
  }
});

// Handle signup
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    console.log('Signup successful:', userCredential.user);
    // Handle successful signup (e.g., redirect to another page)
  } catch (error) {
    console.error('Signup error:', error.message);
    // Handle signup error (e.g., display error message to user)
  }
});
  
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User logged in:', user.uid);
    // Handle user being logged in (e.g., display welcome message)
  } else {
    console.log('No user logged in');
    // Handle user being logged out (e.g., hide user-specific content)
  }
});