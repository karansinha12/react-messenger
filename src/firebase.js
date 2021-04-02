import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAKn2DlBX5hwPr8fHIq9G7JLAzOmac4R2c",
    authDomain: "fb-clone-d3f29.firebaseapp.com",
    projectId: "fb-clone-d3f29",
    storageBucket: "fb-clone-d3f29.appspot.com",
    messagingSenderId: "71083203911",
    appId: "1:71083203911:web:84f6dff64d0a4e54424062",
    measurementId: "G-TNSFV50FE5"
  });

  const db = firebaseApp.firestore();


  export default db