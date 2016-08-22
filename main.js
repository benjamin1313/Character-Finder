function getHead(){
    var name = document.getElementById('nameBox').value;
    document.getElementById('head').src="https://minotar.net/helm/"+ name +"/100.png";
    document.getElementById('face').innerHTML="https://minotar.net/helm/"+ name +"/100.png";
    document.getElementById('body').innerHTML="https://minotar.net/body/"+ name +"/100.png";
}