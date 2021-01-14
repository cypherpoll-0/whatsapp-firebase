import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAyQko5OSCGgC7_iosdlkXYsVkNOUHtUlU",
  authDomain: "whatsappf-7753e.firebaseapp.com",
  projectId: "whatsappf-7753e",
  storageBucket: "whatsappf-7753e.appspot.com",
  messagingSenderId: "571892105188",
  appId: "1:571892105188:web:6e01384a2a71c72f0011f1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider } 
export default db