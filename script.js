function expandirMenu() {
    let listMenu = document.querySelector(".menu")
    listMenu.classList.toggle("open")
}

var body = document.querySelector("body")
var darkModeIcon = document.querySelector("#darkModeIcon")

/* Light <-> Dark mode */
function trocarTema() {
    body.classList.toggle("dark")
    localStorage.setItem("mode", body.classList.contains('dark'))

    darkModeIcon.className=(body.classList.contains('dark') ? 'fa fa-moon-o' : 'fa fa-sun-o')
}

/* Arrumar o erro que quando dava refresh na página o TTS continuava  */
speechSynthesis.cancel()
speechSynthesis.resume()

/*
    Classe da última fala
    -> Para mim reutilizar o parâmetro 'clazz'
*/
var latestSpeechClass = "Undefined";

/* TTS */
var utt

// Tirar o looping
utt.onend = (event) => {
    let icon = body.querySelector(".icon"+latestSpeechClass)
    speechSynthesis.cancel()
    icon.className="fa fa-play-circle";
}

/* Função do leitor */
function speech(clazz="") {
    latestSpeechClass = clazz
    utt = new SpeechSynthesisUtterance()
    utt.lang = "pt-BR"
    utt.rate = 1.25
    utt.pitch = 0
    
    let speechTarget = document.querySelector("section.speech"+clazz)
    let icon = body.querySelector(".icon"+clazz)

    utt.text = speechTarget.textContent
    speechSynthesis.speak(utt)
    
    if (!speechSynthesis.paused) {
        speechSynthesis.pause()
    } else {
        speechSynthesis.resume()
    }
    
    // Troca o ícone
    icon.className=(!speechSynthesis.paused ? "fa fa-play-circle" : "fa fa-pause-circle") + " icon"+clazz
}
