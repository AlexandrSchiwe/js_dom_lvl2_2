let vorName = document.getElementById('vorname');
let nachName = document.getElementById('nachname');
let land = document.getElementById('land');

let getValue = () => {
    console.log(`Full name: ${vorName.value} ${nachName.value} ${land.value}`);
}