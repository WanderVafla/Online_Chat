const inputChatLine = document.getElementById("inputChatLine")
const submitButton = document.getElementById("submitButton")
const chatFrame = document.getElementById("chatFrame")

const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = (event) => {
    const el = document.createElement('div');
    el.textContent = event.data
    chatFrame.appendChild(el);
};

submitButton.onclick = function () {
    socket.send(inputChatLine.value, socket.value)
    inputChatLine.value = null
    console.log(socket, socket.value)
}