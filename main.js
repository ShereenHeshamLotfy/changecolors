var btn = document.getElementById("btn1");
var input = document.getElementById("color");
var box1 = document.getElementById("box1");

btn.addEventListener('click', function () {
    var value = input.value;
    box1.style.backgroundColor = value;
});

input.addEventListener('change', function () {
    var value1 = input.value;
    box1.style.backgroundColor = value1;
});