const wonderColorDiv = document.getElementById('wondercolor');

let wonderColor

function cl(log) {
    console.log(log)
}

function checkIfColorIsSet() {
    let monthDay = new Date().getDate().toString()
    let month = new Date().getMonth().toString()
    let year = new Date().getFullYear.toString()
    if (localStorage.getItem(!'dateWonderColorSet' === `${month} ${monthDay} ${year}`)) {
        setColor()
    } else {
        wonderColor = localStorage.getItem('wonderColor')
    }
}

function setColor() {
    let R = Math.floor(Math.random() * 155) + 101;
    let G = Math.floor(Math.random() * 155) + 101;
    let B = Math.floor(Math.random() * 155) + 101;
    let randomColor = `rgb(${R}, ${G}, ${B})`;
    let monthDay = new Date().getDate().toString()
    let month = new Date().getMonth().toString()
    let year = new Date().getFullYear.toString()
    localStorage.setItem('wonderColor', randomColor);
    localStorage.setItem('dateWonderColorSet', `${month} ${monthDay} ${year}`)
}

checkIfColorIsSet()

document.body.style.backgroundColor = wonderColor