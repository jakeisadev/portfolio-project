// EVENT LISTENERS

document.getElementById("skills").addEventListener('click', () => {
    document.getElementById("skill-container").style.display = 'flex';
    document.getElementById("education-container").style.display = 'none';
})

document.getElementById("education").addEventListener('click', () => {
    document.getElementById("skill-container").style.display = 'none';
    document.getElementById("education-container").style.display = 'flex';
})

document.getElementById("resume").addEventListener('click', () => {
    document.getElementById("skill-container").style.display = 'none';
    document.getElementById("education-container").style.display = 'none';
})

// TYPEWRITER.JS

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 500,
    delay: 80
});

typewriter.typeString("Hey there! It's a pleasure to meet you.")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Here's a little bit about me. Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();