const firebaseConfig = {
    apiKey: "AIzaSyAibjcJlk5_qLkM1JbLhXtwCBvhMwQvFZ0",
    authDomain: "iot15s.firebaseapp.com",
    databaseURL: "https://iot15s-default-rtdb.firebaseio.com",
    projectId: "iot15s",
    storageBucket: "iot15s.appspot.com",
    messagingSenderId: "33023111202",
    appId: "1:33023111202:web:1fe3c37e00cff9fcb01a7b",
    measurementId: "G-TQF3R3880E"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('temp');
      var dataRef2 = database.ref('humid');
      var dataRef3 = database.ref('led');

  //fetch the data
      dataRef1.on('value', function(getdata1){
        var humi = getdata1.val();
        document.getElementById('hum').innerHTML = humi + "%";
      })

       dataRef2.on('value', function(getdata2){
        var temp = getdata2.val();
        document.getElementById('temp').innerHTML = temp + "&#8451;";
      })

    var index=0;
var btn=document.getElementById("led");

function press() {
index++;
if (index%2==1) {
    database.ref('LED').set("1");
    document.getElementById('led').innerHTML="turn off";
}
else {
database.ref('LED').set("0");
document.getElementById('led').innerHTML="turn on";
}
}

