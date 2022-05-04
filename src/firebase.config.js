import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZwoAtrjXK1www-PIpD-GoQ1sYs5reOGs",
    authDomain: "restaurantapp-d02af.firebaseapp.com",
    databaseURL: "https://restaurantapp-d02af-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d02af",
    storageBucket: "restaurantapp-d02af.appspot.com",
    messagingSenderId: "246728730538",
    appId: "1:246728730538:web:b7797d7d946f0109ebedd3"
  };
  const app =getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app,firestore, storage };

