const dom = document.getElementsByClassName("Row");

for (let i = 0; i < dom.length; i++) {
    dom[i].style.background = "green";
}

let count = document.getElementById("count");
let a = 0;

function add() {
    a++;
    count.textContent = a;
    console.log(a)
}

