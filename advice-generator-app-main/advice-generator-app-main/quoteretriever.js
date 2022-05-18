function sendRequest() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            let adviceID = data.slip.id;
            let adviceText = data.slip.advice;
            document.getElementById("advice-header").innerHTML = "ADVICE #" + adviceID;
            document.getElementById("quote").innerHTML = "\"" + adviceText + "\"";
        }
    };
    xhr.open("GET", "https://api.adviceslip.com/advice", true);
    xhr.send();
}