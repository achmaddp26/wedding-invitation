import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

const audio = document.querySelector("#audio-wedding");
// function playAudio() {
// const audio = new Audio("23255679_happy-wedding_by_2bstudio_preview.mp3");

audio.play();
audio.loop = true;
// The data/time we want to countdown to
var countDownDate = new Date("Aug 06, 2022 11:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
            // document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);

const firebaseConfig = {
    apiKey: "AIzaSyDKZ4fsXlgK3hIomnI5t9fddUqdZvddVt0",
    authDomain: "test-firebase-js-89045.firebaseapp.com",
    databaseURL: "https://test-firebase-js-89045-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-firebase-js-89045",
    storageBucket: "test-firebase-js-89045.appspot.com",
    messagingSenderId: "112701827337",
    appId: "1:112701827337:web:88be1fe964a85910ce4bd8"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('frmPesan').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
        nama: document.getElementById('nama').value,
        pesan: document.getElementById('pesan').value,

    });

    // alert('Your form is submitted');
    document.getElementById('frmPesan').reset();
});

// read data from firebase
const dbRef = ref(getDatabase(app));
get(child(dbRef, 'users/')).then((snapshot) => {
    if (snapshot.exists()) {

        Object.keys(snapshot.val()).forEach((key) => {
            console.log(`nama: ${snapshot.val()[key].nama}`);
            console.log(`Pesan: ${snapshot.val()[key].pesan}`);

        });
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});



// }