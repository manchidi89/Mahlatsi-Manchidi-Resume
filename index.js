

const speechBtn = document.getElementById("speechBtn");
const aboutMe =document.getElementById("aboutMe");
const headerMe = document.getElementById("headerMe");
const closep = document.getElementById("close");
const popoverBtn = document.getElementById("popoverBtn");



$('#close').hide();

const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699";

aboutMe.addEventListener("mouseover", ()=>{
    let speech = new SpeechSynthesisUtterance(aboutMe.innerHTML);
    speechSynthesis.speak(speech);
    speech.text = headerMe.innerHTML;
    speechSynthesis.speak(speech);
    speech.text = closep.innerHTML;
    speech.text = popoverBtn.dataset.bsTitle +" " + popoverBtn.dataset.bsContent;
    speech.text = closep.innerHTML;
    speechSynthesis.speak(speech);
    console.log("Button Clicked");
    fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
})

