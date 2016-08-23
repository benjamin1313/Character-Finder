var name = "steave";
function getHead(){
    name = document.getElementById('nameBox').value;
    document.getElementById('imgarea').src="https://minotar.net/helm/"+ name +"/100.png";
    document.getElementById('linkarea').innerHTML="https://minotar.net/helm/"+ name +"/100.png";
}

function getBody(){
    document.getElementById('imgarea').src="https://minotar.net/body/"+ name +"/100.png";
    document.getElementById('linkarea').innerHTML="https://minotar.net/body/"+ name +"/100.png";
}

function getTop(){
    document.getElementById('imgarea').src="https://minotar.net/bust/"+ name +"/100.png";
    document.getElementById('linkarea').innerHTML="https://minotar.net/bust/"+ name +"/100.png";
}

function getSkin(){
    document.getElementById('imgarea').src="https://minotar.net/skin/"+ name;
    document.getElementById('linkarea').innerHTML="https://minotar.net/skin/"+ name;
}