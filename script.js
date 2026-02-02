//Sets 'OnLoad()' to run on window load
window.addEventListener("onLoad", OnLoad)

var DOC_input;
var DOC_welcome_message

//Called on window load
function OnLoad() {
    DOC_input = document.getElementById("input_text");
    DOC_welcome_message = document.getElementById("welcome_message");
}

//Changes the title to 'input_text'. If 'input_text' is "", it sets the title to "..."
function ChangeTitle() {
    var text = "..."; //Empty title
    if (DOC_input.value != "") text = DOC_input.value;
    console.log("RunAlert() :: RunAlert() has been called");
    console.log("RunAlert() :: text = " + text);
    document.title = text;
   
    DOC_welcome_message.innerText = "Welcome to the " + text + " page!";
    DOC_input.value = ""; //Reset the text in 'DOC_input'
}

