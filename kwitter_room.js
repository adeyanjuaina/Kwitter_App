
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDaEvCI9y-x96TROh1S9H3-3go1a20RQ-s",
      authDomain: "kwitter-66fc1.firebaseapp.com",
      databaseURL: "https://kwitter-66fc1-default-rtdb.firebaseio.com",
      projectId: "kwitter-66fc1",
      storageBucket: "kwitter-66fc1.appspot.com",
      messagingSenderId: "962081033290",
      appId: "1:962081033290:web:5be38f56a6c137ec336ab3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome "+user_name;

    function addroom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
} 

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}