class User {
    status = '';
    display_name = '';
    name = '';
    password = '';
};

class Message {
    content = '';
    date = '';
    user = '';
    channel = '';
};

class Channel {
    name = '';
    users = [];
    description = '';
    messages = [];
};

export { User, Message, Channel };
