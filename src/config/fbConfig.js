import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDM2t7NYfd43DniHNpx8h7CzSW8be6zru0",
    authDomain: "my-first-project-f528d.firebaseapp.com",
    databaseURL: "https://my-first-project-f528d.firebaseio.com",
    projectId: "my-first-project-f528d",
    storageBucket: "my-first-project-f528d.appspot.com",
    messagingSenderId: "422627834850",
    appId: "1:422627834850:web:574dc762402d6afb6257bb",
    measurementId: "G-B3NB8WBWJ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});
  

  export default firebase;