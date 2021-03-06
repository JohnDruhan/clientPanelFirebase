# clientPanelFirebase
A React Solution that also uses firebase and redux

## Project Purpose:

This project was built with ReactJS, Redux and Firebase. It helps admins to store their clients details with full CRUD funtionalities. The project uses Redux for state management and Firebase Firestore to store data on the backend.

## Tools and Skills Used
1. ReactJS
2. React Router
3. Bootstrap & Reactstrap for Responsiveness and styling
4. React Hooks
5. Redux
6. Firebase Authentication
7. Firebase Firestore

## How to Load the App

You can run a hosted version of the app here: https://clientpanel-970d4.firebaseapp.com/login

The project uses Node.js and the Create-React-App starter. If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app

```
Run
'npm install'
```

Create a Firebase App. Go to Settings and put the api keys and id's in the fbConfig.js file in the root of project. See the example below:

```
apiKey: "YourAPIKeyGoesHere",
    authDomain: "yourDomainGoesHere.firebaseapp.com",
    databaseURL: "https://yourDomainGoesHere.firebaseio.com",
    projectId: "yourIDGoesHere",
    storageBucket: "yourDomainGoesHere.appspot.com",
    messagingSenderId: "yourIDGoesHere",
    appId: "yourIDGoesHere"
```

Once all of the dependencies have been installed you can launch the app with

```
'npm start'
```

A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser
