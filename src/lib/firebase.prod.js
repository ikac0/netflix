import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCtbEeXonXpVjLse5-tanoqrcgKtzrR58o",
  authDomain: "netflix-clone-b2f36.firebaseapp.com",
  databaseURL: "https://netflix-clone-b2f36.firebaseio.com",
  projectId: "netflix-clone-b2f36",
  storageBucket: "netflix-clone-b2f36.appspot.com",
  messagingSenderId: "569575309643",
  appId: "1:569575309643:web:97b200742f73f5a2f3e8ce",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
