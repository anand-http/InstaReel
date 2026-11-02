import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZA--DJhlAHtMDkToCBDsDUVWvDZpYDP4",
    authDomain: "instareelclone-93610.firebaseapp.com",
    projectId: "instareelclone-93610",
    storageBucket: "instareelclone-93610.appspot.com",
    messagingSenderId: "27933021934",
    appId: "1:27933021934:web:0c6871e63827d754f305ff",
    measurementId: "G-XYWRZZXTNN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
