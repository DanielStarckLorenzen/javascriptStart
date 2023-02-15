console.log("Jeg er setbackgroundcolor. Det er mit navn");

const inp = document.querySelector(".inpColor");
console.log(inp);

const pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

const colPicker = document.querySelector(".colPicker");
console.log(pbCol);

function setBackgroundColor(e) {
    const body = document.querySelector("body");
    let col = inp.value;
    console.log(col);
    body.style.backgroundColor = col;
}

function setBackgroundColorPicker(e) {
    const body = document.querySelector("body");
    let col = colPicker.value;
    console.log(col);
    body.style.backgroundColor = col;
}


pbCol.addEventListener("click", setBackgroundColor);
inp.addEventListener("keyup", setBackgroundColor);
colPicker.addEventListener("input", setBackgroundColorPicker);
