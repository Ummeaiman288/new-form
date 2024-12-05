import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4ucRYrupcD16dhSLVWZm1GIZ3sglXjDQ",
    authDomain: "form-d0a5c.firebaseapp.com",
    projectId: "form-d0a5c",
    storageBucket: "form-d0a5c.firebasestorage.app",
    messagingSenderId: "502414603867",
    appId: "1:502414603867:web:900693cb5076b73c23317e",
    measurementId: "G-BZ4ZRTLP2Q"
};

// Initialize Firebase

const analytics = getAnalytics( app );

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



// Initialize Firebase
const app = initializeApp( firebaseConfig );


// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// onAuthStateChanged (auth,user=> {
//     console.log(`you are logged in as`, user);
// });

// SignInUpWithPopup(auth, new GoogleAuthProvider())

// const db= getfirestore(app)
//  const email = document.getElementById('email').value;
//  const password = document.getElementById('password').value;

const submit = document.getElementById( 'submit' )
submit.addEventListener( click, function ( event ) {
    event.preventDefault()

    const email = document.getElementById( 'email' ).value;
    const password = document.getElementById( 'password' ).value;

    createUserWithEmailAndPassword( auth, email, password )
        .then( ( userCredential ) => {
            // Signed up 
            const user = userCredential.user;
            alert( "creating account..." )
        } )
        .catch( ( error ) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert( "error message" )
        } );
} )










