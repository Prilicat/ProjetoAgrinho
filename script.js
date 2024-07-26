var body = document.querySelector("body");
var darkModeIcon = document.querySelector("#darkModeIcon");

var espandido = false;

function expandirMenu() {
    espandido = !espandido;

    let bars = document.querySelector(!espandido ? ".fa-times" : ".fa-bars");
    
    body.classList.toggle("open");
    bars.className = espandido ? "fa fa-times" : "fa fa-bars";
}

//body.classList.toggle("open");

/* Light <-> Dark mode */
function trocarTema() {
    
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains('dark'));

    darkModeIcon.className=(body.classList.contains('dark') ? 'fa fa-moon-o' : 'fa fa-spin fa-sun-o');
}

// EXPERIMENTAL!!!

/*
var latestSpeechClass = "Undefined";

var utt = new SpeechSynthesisUtterance();

function speech(clazz="") {

    Não é uma boa prática...

    latestSpeechClass = clazz;
    utt.lang = "pt-BR";
    utt.rate = 1.25;
    utt.pitch = 0;
    
    var speechTarget = document.querySelector("section.speech"+clazz);
    var icon = body.querySelector(".icon"+clazz);
    utt.text = speechTarget.textContent;
    speechSynthesis.speak(utt);
    
    if (!speechSynthesis.paused) {
        speechSynthesis.pause();
    } else {
        speechSynthesis.resume();
    }
    
    // Troca o ícone
    icon.className=(!speechSynthesis.paused ? "fa fa-play-circle" : "fa fa-pause-circle") + " icon"+clazz;
}

// Tirar o looping que o narrador faz
utt.onend = (event) => {

    Paraaaa de ficaaar em loooppiing

    var icon = body.querySelector(".icon"+latestSpeechClass);
    speechSynthesis.cancel();
    icon.className="fa fa-play-circle";
}*/