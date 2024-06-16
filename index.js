var header = document.querySelector("#header");
var input = document.querySelector("#input");
var div = document.getElementById("container");
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var clicked = function () {
    header.style.color = input.value;
    header.innerHTML = input.value;
    var c = input.value.split("").reverse().join("");
    var rearrangedString = c.slice(-1) + c.slice(0, -1);
    header.style.backgroundColor = rearrangedString;
    div.style.backgroundColor = input.value;
};
var AnotherClick = function () {
    var hex = getRandomColor();
    header.style.color = hex;
    header.innerHTML = hex;
    var reversedHex = hex.split("").reverse().join("");
    var rearrangedString = reversedHex.slice(-1) + reversedHex.slice(0, -1);
    header.style.backgroundColor = rearrangedString;
    input.value = hex;
    div.style.backgroundColor = hex;
};
AnotherClick();
