


stopanimation();

  var subButton = document.getElementById('submit')
  var input = document.getElementById('input')
  subButton.addEventListener('click', getKey)


  input.setAttribute( "autocomplete", "off" )
  var locationKey;
  function stopanimation(){
    var myDiv = document.getElementById('info');

myDiv.style.webkitAnimationPlayState = "paused";

}
function getKey(){
  var myDiv = document.getElementById('info');
  myDiv.innerHTML = "";
  //var apikey = 'ipmzVNJ5EFoqsx6ApJVr3wFOGzfrZHMf'
  var town = input.value;
  var request = new XMLHttpRequest();
    request.open("GET","//dataservice.accuweather.com/locations/v1/search?q=" + town + "&apikey=kSSGF3G6vq9MTC5fbJtCRHWL2baCt4Ni",true);
    request.send();
    request.addEventListener('load', function(){
    var data = JSON.parse(this.responseText);
     locationKey = data[0].Key

getInfo();
getMoreInfo();
  })

}

function getInfo(){
  var myDiv = document.getElementById('info');

  var newrequest = new XMLHttpRequest();
    newrequest.open("GET","//dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey + "?apikey=kSSGF3G6vq9MTC5fbJtCRHWL2baCt4Ni&language=en-us&details=full&metric=false",true);
    newrequest.send();
    newrequest.addEventListener('load', function(){
     var data = JSON.parse(this.responseText);

     var min = data.DailyForecasts[0].Temperature.Minimum.Value
     var max = data.DailyForecasts[0].Temperature.Maximum.Value
     var headline = data.Headline.Text;

var paraOne = document.createElement("P");
var paraTwo = document.createElement("P");                       // Create a <p> element
var a = document.createTextNode("Today's weather will be a high of " + max + " and a low of " + min);      // Create a text node
var b = document.createTextNode(headline);
paraOne.appendChild(a);
paraTwo.appendChild(b);

myDiv.appendChild(paraOne);
myDiv.appendChild(paraTwo);


})

}
function getMoreInfo(){
  var myDiv = document.getElementById('info');

  var newrequest = new XMLHttpRequest();
    newrequest.open("GET","//dataservice.accuweather.com/currentconditions/v1/"+ locationKey + "?apikey=kSSGF3G6vq9MTC5fbJtCRHWL2baCt4Ni",true);
    newrequest.send();
    newrequest.addEventListener('load', function(){
     var data = JSON.parse(this.responseText);
     var currTemp = data[0].Temperature.Imperial.Value
var myDiv = document.getElementById('info');
var paraOne = document.createElement("P");
var a = document.createTextNode("Current Temperature is " + currTemp + " Degrees F");      // Create a text node
paraOne.appendChild(a)
myDiv.appendChild(paraOne)
myDiv.style.webkitAnimationPlayState = "running";
})
}
