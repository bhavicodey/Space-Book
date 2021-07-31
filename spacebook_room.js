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
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "spacebook_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "spacebook_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}