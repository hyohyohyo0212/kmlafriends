import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, serverTimestamp, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQCJYTyRXvsY1Q-y7eRVPx-pm6hpPWdUg",
  authDomain: "kmlafriends.firebaseapp.com",
  databaseURL: "https://kmlafriends-default-rtdb.firebaseio.com",
  projectId: "kmlafriends",
  storageBucket: "kmlafriends.firebasestorage.app",
  messagingSenderId: "301858142441",
  appId: "1:301858142441:web:6a417d25ea734eccf9d878",
  measurementId: "G-MSJFW8KC18"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
window.auth = auth;
window.db = db;
window.fb = { onAuthStateChanged, loginAnonymously:()=>signInAnonymously(auth), logout:()=>signOut(auth), doc, getDoc, setDoc, collection, getDocs, serverTimestamp, query, where, orderBy, randomPairCode:()=>Math.random().toString(36).slice(2,8).toUpperCase() };
