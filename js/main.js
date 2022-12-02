const buttonsList = document.querySelectorAll('.tecla')
const audiosList = document.querySelectorAll('audio')


function playAudio(idAudio) {
    const element = document.querySelector(idAudio)

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Elemento inválido')
    }

}

let count = 0

for (let count = 0; count < buttonsList.length; count++) {

    const button = buttonsList[count]
    const instrument = button.classList[1]
    const audioId = `#som_${instrument}`

    button.onclick = function () {
        playAudio(audioId)
        return;
    }

    button.onkeydown = function (event) {
        let keyboard = event.code

        if ((keyboard === "Space") || (keyboard === "Enter")) {
            button.classList.add('ativa')
        }

    }

    button.onkeyup = function () {
        button.classList.remove('ativa')

    }
}