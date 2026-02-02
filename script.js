
//Changes the title to 'input_text'. If 'input_text' is "", it sets the title to "..."
function ChangeTitle() {
    var DOC_input = document.getElementById("input_text");
    var text = "..."; //Empty title
    if (DOC_input.value != "") text = DOC_input.value;
    console.log("RunAlert() :: RunAlert() has been called");
    console.log("RunAlert() :: text = " + text);
    document.title = text;
    DOC_input.value = ""; //Reset the text in 'DOC_input'
}

