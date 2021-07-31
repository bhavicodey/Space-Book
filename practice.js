var firebaseConfig = {
    apiKey: "AIzaSyBpUYRl7EboClZLXdIYN_S6-bNItpRsXZg",
    authDomain: "spacebook-9f35a.firebaseapp.com",
    databaseURL: "https://spacebook-9f35a-default-rtdb.firebaseio.com",
    projectId: "spacebook-9f35a",
    storageBucket: "spacebook-9f35a.appspot.com",
    messagingSenderId: "465243817552",
    appId: "1:465243817552:web:f16258c81629ffc273f355"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      })
  }