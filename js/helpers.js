import { User, Message, Channel } from './classes.js';
import { messages } from './data.js';

function update_chat(messages) {
    let result = '<ul>'
    for (let i=0; i < messages.length; i++) {
        result += '<li>' + messages[i].content + '</li>'
    }
    result += '</ul>'

    let elements = document.getElementsByClassName("inner-right-chat");
    elements[0].innerHTML = result;
}

update_chat(messages)