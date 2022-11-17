const text_input  = document.querySelector("#text-input");
var btn = document.querySelector(".btn");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getURL(inputText){
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error){
    console.log("Error occured: ", error);
    alert("Something's broken. BRB <3");
}

function clickHandler(){
    var inputText = text_input.value;

    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        console.log(translatedText);
        output.innerHTML = translatedText;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);