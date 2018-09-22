var subButton = document.getElementById('submit')
var input = document.getElementById('input')
subButton.addEventListener('click', getKey)

input.setAttribute( "autocomplete", "off" )
var locationKey;

function getKey(){
  var apikey = 'ipmzVNJ5EFoqsx6ApJVr3wFOGzfrZHMf'
  var town = input.value;
  var request = new XMLHttpRequest();
    request.open("GET","//dataservice.accuweather.com/locations/v1/search?q=" + town + "&apikey=ipmzVNJ5EFoqsx6ApJVr3wFOGzfrZHMf",true);
    request.send();
    request.addEventListener('load', function(){
    var data = JSON.parse(this.responseText);
     locationKey = data[0].Key
     console.log(locationKey);

getInfo();
getMoreInfo();
  })

}

function getInfo(){


  var newrequest = new XMLHttpRequest();
    newrequest.open("GET","//dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey + "?apikey=ipmzVNJ5EFoqsx6ApJVr3wFOGzfrZHMf&language=en-us&details=full&metric=false",true);
    newrequest.send();
    newrequest.addEventListener('load', function(){
     var data = JSON.parse(this.responseText);
     console.log(data);
     var min = data.DailyForecasts[0].Temperature.Minimum.Value
     var max = data.DailyForecasts[0].Temperature.Maximum.Value
     var headline = data.Headline.Text;
     console.log(headline)
document.getElementById('weather').innerHTML = "Today's weather will be a high of " + max + " and a low of " + min;
document.getElementById('warning').innerHTML = headline;


})

}
function getMoreInfo(){
  var newrequest = new XMLHttpRequest();
    newrequest.open("GET","//dataservice.accuweather.com/currentconditions/v1/"+ locationKey + "?apikey=ipmzVNJ5EFoqsx6ApJVr3wFOGzfrZHMf",true);
    newrequest.send();
    newrequest.addEventListener('load', function(){
     var data = JSON.parse(this.responseText);
     var currTemp = data[0].Temperature.Imperial.Value
     document.getElementById('actualTemp').innerHTML = "Current Temperature is " + currTemp + " Degrees F";




})
}
