import { User, Message, Channel } from './classes.js';

function update_chat(messages) {
    let result = '<ul>'
    for (let i=0; i < messages.length; i++) {
        result += '<li>' + messages[i].content + '</li>'
    }
    result += '</ul>'

    let elements = document.getElementsByClassName("inner-right-chat");
    elements[0].innerHTML = result;
}

let messages = []
for (let i=0; i <= 3; i++) {
    let message = new Message();
    message.content = Math.random();
    messages.push(message)
}

update_chat(messages)