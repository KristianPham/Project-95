
var firebaseConfig = {
      apiKey: "AIzaSyDVSTHM8yowfIsLjjAdOayZplmrIZRyqFI",
      authDomain: "letuschat-79225.firebaseapp.com",
      databaseURL: "https://letuschat-79225-default-rtdb.firebaseio.com",
      projectId: "letuschat-79225",
      storageBucket: "letuschat-79225.appspot.com",
      messagingSenderId: "725635875967",
      appId: "1:725635875967:web:b4bc8e63356430d3b6eb4a",
      measurementId: "G-4WMPNF5QG6"
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


      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
