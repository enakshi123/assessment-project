
    // var url="https://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=4980bb1e7366f5a8d033e4122ebc8756";
//     xmlhttp.open("GET", url, true);

//     xmlhttp.send();
// }


function load() {
    var lat = document.getElementById("lat").value;
    var long = document.getElementById("long").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText); //convert string to obj
            document.getElementById("lattitude").innerHTML= "UV Index: " + obj[0].value;  //uv index value
            document.getElementById("longitude").innerHTML = "Date: " + obj[0].date_iso;   //date
            document.getElementById("lattitude").setAttribute("class","value");
            document.getElementById("longitude").setAttribute("class","value");
        }
    };

    xhttp.open("GET","http://api.openweathermap.org/data/2.5/uvi/forecast?appid=4980bb1e7366f5a8d033e4122ebc8756&lat="+lat+"&lon="+long ,true);
    
    xhttp.send();
}