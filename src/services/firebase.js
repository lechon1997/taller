import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyCOabNQdrXnxL5Z2Wa4CUOQ6Z_bvkSX-VA",
  authDomain: "chatty-app-2b550.firebaseapp.com",
  projectId: "chatty-app-2b550",
  storageBucket: "chatty-app-2b550.appspot.com",
  messagingSenderId: "11063656794",
  appId: "1:11063656794:web:c129649c2e5d3e92e33363",
  databaseURL: "https://chatty-app-2b550-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = getAuth();
export const db = getDatabase();
