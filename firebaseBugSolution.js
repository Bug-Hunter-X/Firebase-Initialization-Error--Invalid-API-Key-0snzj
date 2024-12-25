import { initializeApp } from "firebase/app";
// ... other imports

// Ensure that the firebaseConfig contains the correct values obtained from the Firebase console
const firebaseConfig = {
  apiKey: "YOUR_CORRECT_API_KEY",
  authDomain: "YOUR_CORRECT_AUTH_DOMAIN",
  // ... other correct config values
};

const app = initializeApp(firebaseConfig);

// ... rest of your Firebase code
// Verify the Firebase initialization by checking if app is initialized correctly
console.log(app);
// ... access other Firebase services