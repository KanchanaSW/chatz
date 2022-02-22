import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZENProOVli-6Iw6fsh43z2PYkHxI7EDY",
  authDomain: "chatz-22aaa.firebaseapp.com",
  projectId: "chatz-22aaa",
  storageBucket: "chatz-22aaa.appspot.com",
  messagingSenderId: "587167718828",
  appId: "1:587167718828:web:e83abf31ad7c1929fc6e09",
  measurementId: "G-KQ9174CT7K",
})

const db= firebase.firestore()

const auth=firebase.auth()

export {db,auth}