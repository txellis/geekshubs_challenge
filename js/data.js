import { User, Channel, Message } from "./classes.js";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let users = ["John Doe", "Jane Doe", "Epic Westruder", "Curious Struddle"];

let channels = ["intersting", "uninteresting", "awesome", "need"];

let user_objs = []

for (let i = 0; i < users.length; i++) {
    let user = new User()
    user.name = users[i].toLowerCase().replace(" ", "");
    user.display_name = users[i];
    user.password = "patata123";
    user.status = "offline";
    user_objs.push(user)
}
console.log(user_objs)

let channel_objs = []

for (let i = 0; i < channels.length; i++) {
    let channel = new Channel()
    channel.name = channels[i];
    channel.description = "It is an awesome channel to chat with friends";
    channel.users.push(user_objs[getRandomInt(0, 3)]);
    channel.users.push(user_objs[getRandomInt(0, 3)]);
    console.log(channel.users)
    channel_objs.push(channel)
}
console.log(channel_objs)

let messages = []

for (let i = 0; i < 2500; i++) {
    let message = new Message();
    message.content = "Lorem ipsum dolor sit amet, consectetur adipisici elit";
    message.date = new Date(2022, 8, getRandomInt(1, 30), getRandomInt(0, 23), getRandomInt(0, 59), getRandomInt(0, 59));
    message.user = user_objs[getRandomInt(0, 3)];
    message.channel = channel_objs[getRandomInt(0, 3)];
    messages.push(message)
}

console.log(messages)

export { messages };