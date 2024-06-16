let header = document.querySelector("#header") as HTMLHeadingElement;
let input = document.querySelector("#input") as HTMLInputElement;
let div = document.getElementById("container") as HTMLDivElement;
function getRandomColor() :string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const clicked = ():void => {
  header.style.color = input.value;
  header.innerHTML = input.value;
  const c = input.value.split("").reverse().join("");
  const rearrangedString = c.slice(-1) + c.slice(0, -1);
  header.style.backgroundColor = rearrangedString;
  div.style.backgroundColor = input.value;
};
 
const AnotherClick = ():void =>{
    const hex = getRandomColor()
    header.style.color = hex;
    header.innerHTML = hex;
    const reversedHex = hex.split("").reverse().join("");
    const rearrangedString = reversedHex.slice(-1)+reversedHex.slice(0,-1);
    header.style.backgroundColor = rearrangedString
    input.value = hex;
    div.style.backgroundColor = hex;
  }

AnotherClick()