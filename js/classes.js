class User {
    status = 'offline';
    display_name = 'Wadus';

    constructor(user_name, password) {
        this.user_name = user_name;
        this.password = password;
    }

    set display_name(name) {
        this.display_name = name
    }

    set status(status) {
        this.status = status
    }
}

let app_user = new User('josevi', 'segur123');
console.log(app_user.user_name);
