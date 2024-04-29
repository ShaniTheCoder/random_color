header = document.querySelector("#header");
input = document.querySelector("#input");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const clicked = () => {
  header.style.color = input.value;
  header.innerHTML = input.value;
  let c = input.value.split("").reverse().join("");
  const rearrangedString = c.slice(-1) + c.slice(0, -1);
  header.style.backgroundColor = rearrangedString;
  // document.body.style.backgroundColor = input.value;
    document.getElementById("color").style.backgroundColor = input.value;


};
 
const AnotherClick = () =>{
    let hex = getRandomColor()
    header.style.color = hex;
    header.innerHTML = hex;
    let reversedHex = hex.split("").reverse().join("");
    const rearrangedString = reversedHex.slice(-1)+reversedHex.slice(0,-1);
    header.style.backgroundColor = rearrangedString
    input.value = hex;
    // document.body.style.backgroundColor = hex;
    document.getElementById("color").style.backgroundColor = hex;
  }
window.onload(AnotherClick())  
/* setInterval(() => {
      let hex = getRandomColor();
      header.style.color = hex;
      header.innerHTML = hex;
      let reversedHex = hex.split("").reverse().join("");
      const rearrangedString = reversedHex.slice(-1) + reversedHex.slice(0, -1);
      header.style.backgroundColor = rearrangedString;
}, 2000); */
