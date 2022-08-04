import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";





//----------------page 2--------------------------
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
// document.getElementById("test").innerHTML = "adf";
// read data from firebase
let width = screen.width;
console.log(width);
let pesans_m = document.getElementById('ucp-user-m');
let pesans = document.getElementById('ucp-user');
const dbRef = ref(getDatabase(app));
get(child(dbRef, 'users/')).then((snapshot) => {
    if (snapshot.exists()) {

        Object.keys(snapshot.val()).forEach((key) => {

            let divElement = document.createElement("div");
            // divElement.classList.add("flex", "flex-col", "pb-1")
            divElement.innerHTML =
                ` <div class="pt-1 flex flex-col ">
                <label class="text-sm sm:text-2xl text-center font-gilroy_light" style="font-weight: 600;" for="">${snapshot.val()[key].nama} :</label>
                <label class="text-sm sm:text-2xl text-center font-gilroy_light" style="font-weight: 500;" for="">${snapshot.val()[key].pesan}</label>
            </div>`;
            console.log(`nama: ${snapshot.val()[key].nama}`);
            console.log(`Pesan: ${snapshot.val()[key].pesan}`);
            if (width > 640) {
                pesans.appendChild(divElement);

            }
            if (width < 640) {
                pesans_m.appendChild(divElement);

            }
        });

    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});


localStorage.setItem("audio", "true");
let triggerMusic;
let audio = document.querySelector("#audio-wedding");

if (localStorage.getItem("audio") != null) { triggerMusic = localStorage.getItem("audio"); } else {
    triggerMusic = "true";
}

if (width > 640) {
    document.querySelector("#btn-audio-wedding").addEventListener('click', function() {
        console.log("trigger");
        console.log(triggerMusic);
        triggerMusic = localStorage.getItem("audio");
        if (triggerMusic == "true") {

            playAudio();

        } else {
            pauseAudio();
        }
    });
} else {
    document.querySelector("#btn-audio-wedding-m").addEventListener('click', function() {
        console.log("trigger");
        console.log(triggerMusic);
        triggerMusic = localStorage.getItem("audio");
        if (triggerMusic == "true") {

            playAudio();

        } else {
            pauseAudio();
        }
    });
}


if (triggerMusic == "true") {
    playAudio();

} else {
    pauseAudio();
}






function playAudio() {
    // const audio = new Audio("23255679_happy-wedding_by_2bstudio_preview.mp3");
    audio.loop = true;
    audio.play();
    localStorage.setItem("audio", "false");
    // document.getElementById("icon-music").src = "./assets/icon/valume.png";
    // document.getElementById("icon-music").createElement("IMG").setAttribute(setAttribute("src", "./assets/icon/valume.png"));
    // document.getElementById("icon-music").setAttribute("src", "./assets/icon/valume.png");
}

function pauseAudio() {
    console.log("pause");
    audio.pause();
    localStorage.setItem("audio", "true");
    // document.getElementById("icon-music").createElement("IMG").setAttribute(setAttribute("src", "./assets/icon/valume.png"));
    // document.getElementById("icon-music").setAttribute("src", "./assets/icon/valume.png");
    // document.getElementById("icon-music").setAttribute("src", "./assets/icon/silent.png");
    // document.getElementById("icon-music").src = "./assets/icon/silent.png";
}



// }
