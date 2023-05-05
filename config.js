import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCUMthMKmV2WCA7SEsg7vHLz_jCcxxnIyg",
  authDomain: "ciclista-eletronico-6bc1c.firebaseapp.com",
  projectId: "ciclista-eletronico-6bc1c",
  storageBucket: "ciclista-eletronico-6bc1c.appspot.com",
  messagingSenderId: "13813161968",
  appId: "1:13813161968:web:832535c0fe2f6926984735",
  measurementId: "G-L7YX74YX29"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
