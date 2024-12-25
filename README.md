# Firebase Initialization Error: Invalid API Key

This repository demonstrates a common Firebase initialization error and its solution. The error occurs when the provided API key is invalid, resulting in a failure to connect to Firebase services.

## Problem

The provided `apiKey` in the Firebase configuration is incorrect. This could be due to a typo, using a key from the wrong project, or if the project is not correctly setup in the Firebase console.

## Solution

The solution involves double-checking the `apiKey` and ensuring that the Firebase project is properly configured and linked to your application. The `firebaseConfig` object should contain the correct API key, auth domain, and other necessary configuration values obtained from the Firebase console.

## How to Reproduce

1. Clone this repository.
2. Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN` and other placeholders in `firebaseBug.js` with your actual Firebase configuration values (or use the invalid value to reproduce the error).
3. Run the code.
4. Observe the error message related to the invalid API key.
5. Implement the solution from `firebaseBugSolution.js`.
6. Verify that the Firebase application initializes correctly.