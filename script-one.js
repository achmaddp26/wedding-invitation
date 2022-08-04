// localStorage.setItem("page", "2");
//----------------page 1--------------------------
//qwuery param
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.to;

document.getElementById("kepada").innerHTML = value;
localStorage.setItem("audio", "true");

//

// function playAudio() {
// const audio = new Audio("23255679_happy-wedding_by_2bstudio_preview.mp3");
