// VARIABLES

const skillContainer = document.getElementById("skill-container");
const educationContainer = document.getElementById("education-container");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const resume = document.getElementById("resume");
const recommendationsButton = document.getElementById("recommendations");
const modal = document.getElementById("modal");
const close = document.getElementById("close-btn");

// EVENT LISTENERS

skills.addEventListener('click', () => {
    skillContainer.style.display = 'flex';
    educationContainer.style.display = 'none';
})

education.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    educationContainer.style.display = 'flex';
})

resume.addEventListener('click', () => {
    skillContainer.style.display = 'none';
    educationContainer.style.display = 'none';
})

recommendationsButton.addEventListener('click', () => {
    modal.style.display = "block";
})

 //Close Modal

close.addEventListener('click', function(e){
    modal.style.display = "none";
})

//Hiding Modal if clicked outside.

modal.onclick = function(e){
    if(e.target == close) 
    console.log('closed by x');
    if(e.target != close)
    console.log('closed by window'); 
    modal.style.display = "none";
}

//Hiding containers if clicked outside.

window.onclick = function(e){
  if(e.target != skills) skillContainer.style.display = 'none';
  if(e.target != education) educationContainer.style.display = 'none';
}


// TYPEWRITER.JS

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 200,
    delay: 70
});

typewriter.typeString("Hey there! It's a pleasure to meet you.")
    .pauseFor(500)
    .deleteAll()
    .typeString("Here's a little bit about me. Thanks for visiting!")
    .pauseFor(500)
    .deleteAll()
    .start();