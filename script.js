const btn = document.getElementById("e_btn");
btn.style.display = "none";

document.getElementById('btn').onclick = myClick;

function myClick() {
    let a = document.querySelector('#text').value;

    document.getElementById('square').style.backgroundColor = a;
    console.log(a);
}

const range = document.getElementById("range");
const span = document.getElementById("range-span");

const logger = function(event) {
    span.textContent = event.target.value
    document.getElementById("circle").style.height = event.target.value + "%";
    document.getElementById("circle").style.width = event.target.value + "%";
}
range.addEventListener('input', logger)
range.addEventListener('change', logger)








