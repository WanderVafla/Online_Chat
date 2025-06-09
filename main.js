const inputChatLine = document.getElementById("inputChatLine")
const submitButton = document.getElementById("submitButton")
const chatFrame = document.getElementById("chatFrame")

let username = 'Vladyslav'

inputChatLine.value = 'My message'

submitButton.onclick = function () {
    console.log(inputChatLine.value)
    element_message()
    inputChatLine.value = null
}

function element_message() {

    let message = document.createElement('div')
    message.textContent = inputChatLine.value
    chatFrame.appendChild(message)
}