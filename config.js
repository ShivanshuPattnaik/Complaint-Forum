import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyBYOm-bwD0FTaWq6BI57Exvm5qR8duTOZ0",
  authDomain: "complaint-forum-9a7a8.firebaseapp.com",
  databaseURL: "https://complaint-forum-9a7a8.firebaseio.com",
  projectId: "complaint-forum-9a7a8",
  storageBucket: "complaint-forum-9a7a8.appspot.com",
  messagingSenderId: "576292853535",
  appId: "1:576292853535:web:8fba8457b8ae910518022a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

