let firebaseConfig = {
    apiKey: "AIzaSyBPQZzDCqZfGUChfCrdtne6OP0N4RVnSDU",
    authDomain: "blogging-website-2219c.firebaseapp.com",
    projectId: "blogging-website-2219c",
    storageBucket: "blogging-website-2219c.appspot.com",
    messagingSenderId: "61138764878",
    appId: "1:61138764878:web:d303f7ea92fef8a8252f1f"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}