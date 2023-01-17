const firebaseConfig = {
    apiKey: "AIzaSyAikt1fDrVlDXNxJ0RSDh6PVI_al1QUmQE",
    authDomain: "kwitter94-e141d.firebaseapp.com",
    databaseURL: "https://kwitter94-e141d-default-rtdb.firebaseio.com",
    projectId: "kwitter94-e141d",
    storageBucket: "kwitter94-e141d.appspot.com",
    messagingSenderId: "961347740666",
    appId: "1:961347740666:web:f219b3935cfb36118bfa43",
    measurementId: "G-53F9EBDZ59"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }