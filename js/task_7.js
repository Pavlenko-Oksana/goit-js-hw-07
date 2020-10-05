const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(fontSizeControl, text);

fontSizeControl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
