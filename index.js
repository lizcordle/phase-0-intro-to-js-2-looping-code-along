// Code your solutions in this file
const messageNames = [];

function writeCards(name, value) {
    let messageNames = []
    for (let i = 0; i < name.length; i++) {
        messageNames.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames;
}
function countDown() {
    let numCountdown=11;
    while(numCountdown--) {
        console.log(numCountdown)
    }
}