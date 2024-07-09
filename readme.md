To start the React project 
Run "npm start" in terminal
see the output in (http://localhost:3000/)

To run the Backend

install the dependencies and start server with nodemon or node index.js

see the output in (http://localhost:7000//submit)

to store the data in firebase the react server and node server should be running locally


 ?? how to Download Service Account Key from Firebase: ??

//with the help of follwing  steps we can able to storeData in storeData.json//

=> Go to Firebase Console: Open your browser and go to the Firebase Console.
=> Select Your Project: Click on the project you want to use.
=> Open Project Settings: Click on the gear icon next to "Project Overview" in the left sidebar to open the project settings.
=> Go to Service Accounts: In the project settings, click on the "Service accounts" tab.
=>Click the "Generate new private key" button.
A dialog will appear. Confirm by clicking the "Generate key" button.
This will download a JSON file containing your service account credentials.

import below lines in your backend file

const admin = require('firebase-admin');

const serviceAccount = require("./storeData.json) // import the json data from the 
storeData.json

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

open the firebase and see the documents
