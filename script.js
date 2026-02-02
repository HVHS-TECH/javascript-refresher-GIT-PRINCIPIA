
//Create a dialog with the text from 'input_text'
function RunAlert() {
    var DOC_input = document.getElementById("input_text");
    var text = "...";
    text = DOC_input.value;
    console.log("RunAlert() :: RunAlert() has been called");
    console.log("RunAlert() :: text = " + text);
    alert(text);
}