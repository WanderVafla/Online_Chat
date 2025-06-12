const inputChatLine = document.getElementById("inputChatLine")
const submitButton = document.getElementById("submitButton")
const chatFrame = document.getElementById("chatFrame")

// let username = 'Vladyslav'

// inputChatLine.value = 'My message'

// submitButton.onclick = function () {
//     console.log(inputChatLine.value)
//     element_message()
//     inputChatLine.value = null
// }

// function element_message() {

//     let message = document.createElement('div')
//     message.textContent = inputChatLine.value
//     chatFrame.appendChild(message)
// }

const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const el = document.createElement('div');
    el.textContent = event.data
    chatFrame.appendChild(el);
};

submitButton.onclick = function () {
    socket.send(inputChatLine.value)
    inputChatLine.value = null
}