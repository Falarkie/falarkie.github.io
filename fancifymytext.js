function bigger(){
    document.getElementById("textInput").style.fontSize = "15pt";
    alert("Hello, world!");
}
function smaller(){
    document.getElementById("textInput").style.fontSize = "10pt";
}

function setStyle(){
    const text = document.getElementById("textInput");
    const fancy = document.getElementById("fancy");
    const boring = document.getElementById("boring");

    if (fancy.checked) {
        text.style.color = "blue";
        text.style.textDecoration = "underline";
        text.style.fontWeight = "bold";
    }else if (boring.checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function moo(){
    const text = document.getElementById("textInput");
    textInput.value = text.value.toUpperCase();
    const sentenceTokens = text.value.split(".");
    text.value = sentenceTokens.join("-Moo.");
}
