const socket = new io('ws://localhost:3500')



function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input');

    if (input.value) {

        socket.emit("message", input.value);
        input.value = '';
    }
    input.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage)

socket.on('message', (data) => {
    const liItem = document.createElement('li');
    liItem.textContent = data;
    document.querySelector('menu').appendChild(liItem)
} )