var txtInput = document.querySelector('#txtInput');
var btnTranslate = document.querySelector('#btnTranslate');
var outputTxt = document.querySelector('#outputTxt');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something Went wrong try again after sometime")
}

function clickHandler() {
    let inputText = txtInput.value;
    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        outputTxt.innerHTML = translatedText;
    })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);







