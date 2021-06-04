![Image](https://i.ibb.co/LxmYVwc/p1-ping.png)
![Image](https://i.ibb.co/LxmYVwc/p1-ping.png)
![Image](https://i.ibb.co/VgQtygn/p1-folders.png)
![Image](https://i.ibb.co/QYDcjWg/p1-tree.png)

```
{
/*
    CIT 281 Project 1
    Name: Mehak Dedmari
*/

let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"];
let n = weekday[new Date().getDay()];

console.log (n);
}
```

```
{
let alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let s = "";
for (i=0; i<getRandomInteger(5,25); i++) {
    s += alphabet.charAt(getRandomInteger(0,26));
}

console.log (s);
}
```
