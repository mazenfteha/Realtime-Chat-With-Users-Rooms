const chatForm = document.getElementById('chat-form')

const socket = io()

socket.on('message', message =>{
    console.log (message);
    outputMessage(message)
})

//message submit
chatForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get message text 
    const msg = e.target.elements.msg.value;

    //emit message to server
    socket.emit('chatMessage',msg);
})

// output message to DOM
function outputMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML =`<p class="meta">Mary <span>9:15pm</span></p>
    <p class="text">
    ${message}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}