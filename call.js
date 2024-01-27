

function setUserName(userName){
    this.userName = userName;
    console.log(userName);
    console.log("called");
};

function createUser(username , email, password){


    setUserName.call(this, username);
    console.log(this.username);
    this.email = email;
    this.password = password;

}

const user1 = new createUser("Gourav", "gourav@meta.com", "qwerty");

const user2 = new createUser("Koushik", "supakar@gmail.com", "supakar123");

const user3 = new createUser("sourabh", "sourab@gmail.com", "sourabh123")

console.log(user1);
console.log(user2);
console.log(user3);