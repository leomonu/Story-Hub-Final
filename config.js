import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCWn8tKeYy84MtF-PvLUKKg9U9hORCWztc",
    authDomain: "story-6ea2b.firebaseapp.com",
    databaseURL: "https://story-6ea2b.firebaseio.com",
    projectId: "story-6ea2b",
    storageBucket: "story-6ea2b.appspot.com",
    messagingSenderId: "11176188485",
    appId: "1:11176188485:web:20b2f496870515d7b2212c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()