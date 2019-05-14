import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAnvrUiyNp7t9o_6QvyLqKgbTF7eqaW00I",
    authDomain: "clientpanel-970d4.firebaseapp.com",
    databaseURL: "https://clientpanel-970d4.firebaseio.com",
    projectId: "clientpanel-970d4",
    storageBucket: "clientpanel-970d4.appspot.com",
    messagingSenderId: "990741117290",
    appId: "1:990741117290:web:ac1da0966234c862"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

export {
  firebase,
  firestore,
  auth
};