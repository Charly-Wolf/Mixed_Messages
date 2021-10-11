const messageParts = {
    greetings: ["Hello!", "Hi!", "Hey!", "What's up?"],
    readyness: ["on your way", "almost ready", "ready", "more than ready"],
    level: ["rookie", "good coder", "master", "hacker"],
    language: ["Python", "JavaScript", "Java", "C#"],

    randomGreeting() {
        let randomGreeting = this.greetings[Math.floor(Math.random() * 4)];
        return randomGreeting;
    },
    randomReadyness() {
        let randomReadyness = this.readyness[Math.floor(Math.random() * 4)];
        return randomReadyness;
    },
    randomLevel() {
        let randomLevel = this.level[Math.floor(Math.random() * 4)];
        return randomLevel;
    },
    randomLanguage() {
        let randomLanguage = this.language[Math.floor(Math.random() * 4)];
        return randomLanguage;
    },
};

const generateRandomMessage = () => {
    let randomMessage = messageParts.randomGreeting() + " You are " + messageParts.randomReadyness() + " to be a " + messageParts.randomLevel() + " in " + messageParts.randomLanguage() + "!";
    return randomMessage;
};

console.log(generateRandomMessage());

//Tests

//1-Check if randomGreeting is correctly selected
//console.log(messageParts.randomGreeting());
//SUCCESS
//2-Check the other random properties of messageParts
//console.log(messageParts.randomReadyness());
//console.log(messageParts.randomLevel());
//console.log(messageParts.randomLanguage());
//SUCCESS
//3-Cehck if function generateRandomMessage works
//console.log(generateRandomMessage());
//console.log(generateRandomMessage());
//console.log(generateRandomMessage());
//SUCCESS