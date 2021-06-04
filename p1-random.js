let alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let s = "";
for (i=0; i<getRandomInteger(5,25); i++) {
    s += alphabet.charAt(getRandomInteger(0,26));
}

console.log (s);