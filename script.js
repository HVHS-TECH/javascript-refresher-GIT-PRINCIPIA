//Sets 'OnLoad()' to run on window load
window.addEventListener("load", OnLoad);

var DOC_input; //The input box for changing title and header
var DOC_welcome_message; //The welcome message (header)

//Called on window load
function OnLoad() {
    DOC_input = document.getElementById("input_text");
    DOC_welcome_message = document.getElementById("welcome_message");
}

//Changes the title to 'input_text'. If 'input_text' is "", it sets the title to "..."
function ChangeTitle() {
    var text = "..."; //Empty title

    if (DOC_input.value != "") text = DOC_input.value;

    //Confirm function call
    console.log("ChangeTitle() :: ChangeTitle() has been called");
    console.log("ChangeTitle() :: text = " + text);

    //Set the title of the document to 'text'
    document.title = text;
   
    //Set the welcome message text to use 'text'
    DOC_welcome_message.innerText = "Welcome to the " + text + " page!";

    //Reset the text in 'DOC_input'
    DOC_input.value = ""; 
}

