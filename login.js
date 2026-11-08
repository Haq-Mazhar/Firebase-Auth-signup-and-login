import {  firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup  } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const login = document.getElementById("login")
const email = document.getElementById("email")
const password = document.getElementById("password")

const googleLogin = document.getElementById("googlelogin")

googleLogin.addEventListener("click",async function(){
    const provider = new GoogleAuthProvider();
    await signInWithPopup (auth,provider)

    .then((user)=>{
        console.log(user)
    })

    .catch((e)=>{
        console.log(e)
    })

})

login.addEventListener("click", async function() {
    await signInWithEmailAndPassword(auth,email.value,password.value)
    .then((user)=>{
        
        if(user.user.emailVerified == false){ // check EMAIL VERIFICATION
            alert("Verify Your Email")
        }else{
            console.log(user.user.emailVerified)
         window.location.href="./succesful.html";

        }
    })
    .catch((e)=>{
        console.log(e)
    })
    
})

 