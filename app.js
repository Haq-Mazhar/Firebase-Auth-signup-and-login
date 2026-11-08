import {  firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const app =   initializeApp (  firebaseConfig);
const auth = getAuth(app);

console.log(auth);

const signup = document.getElementById("signup");
const name = document.getElementById("name")
const email = document.getElementById("email")
const conatactNo = document.getElementById("conatactNo")
const password = document.getElementById("password")



signup.addEventListener("click", async function () {
   await createUserWithEmailAndPassword(auth,email.value,password.value)
   
   .then(async(user)=>{
    console.log(user)

    await  sendEmailVerification(user.user) // EMAIL VERIFICATION

    alert("Account Created & Email send Succesfully")
    
    window.location.href="./index.html";

   })
   .catch((e)=>{
    console.log(e)

   })



});