const fruits = ["æbler", "pærer", "bananer", "juice"];

function myFunc1(item) {
    const ptag = document.getElementById("demo");
    console.log(ptag);
    ptag.innerHTML += item + "<br>";
}

function myFunc2(item, index) {
    const ptag = document.getElementById("demo");
    index += 1;
    ptag.innerHTML += "<br>" + index + ": " + item;
}

fruits.forEach(myFunc2);