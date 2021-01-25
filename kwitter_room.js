user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: "AIzaSyDBQ4QHhwDUhVxdfcNy5cV9J0CQrfpG0hk",
    authDomain: "kwitter-4de64.firebaseapp.com",
    databaseURL: "https://kwitter-4de64-default-rtdb.firebaseio.com",
    projectId: "kwitter-4de64",
    storageBucket: "kwitter-4de64.appspot.com",
    messagingSenderId: "776913703035",
    appId: "1:776913703035:web:9bea0838a88ad0adce12de",
    measurementId: "G-2MSM15D34S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  



function logOut(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
  }

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    })

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  Room_names = childKey; console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   }); }); }
   getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
  }
