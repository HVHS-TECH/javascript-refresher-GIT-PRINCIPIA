var DOC_input = document.getElementById("input_text");
var name = "...";
function RunAlert() {
    console.log("RunAlert() :: DOC_input is " + (DOC_input === null) ? "" : "not " + "null");
    name = DOC_input.value;
    alert("RunAlert() :: RunAlert() has been called\nHello " + name + "!");
}