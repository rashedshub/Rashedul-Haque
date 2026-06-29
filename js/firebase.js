import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsu3StTX9q3hNk-kOK7Rz89tI-2P3OXgw",
  authDomain: "i-rashedulhaque.firebaseapp.com",
  projectId: "i-rashedulhaque",
  storageBucket: "i-rashedulhaque.firebasestorage.app",
  messagingSenderId: "456423753760",
  appId: "1:456423753760:web:36a39da05cd1be62885445"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
