const socket = new WebSocket('ws://localhost:9000')

function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input');

    if (input.value) {
        socket.send(input.value);
        input.value = '';
    }
    input.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage)

socket.addEventListener('message', ({data}) => {
    const liItem = document.createElement('li');
    liItem.textContent = data;
    document.querySelector('menu').appendChild(liItem)
} )