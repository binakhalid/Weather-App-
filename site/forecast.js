$(document).ready(function(){
	$("#submitForecast").click(function(){
		return getForecast();

	});

});
function getForecast(){
 var city = $("#city").val();
var days = $("#days").val();

if (city != '' & days != '') {
$.ajax ({
 url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=" + days + "&APPID=ccf5e7036115050708a555bb11f8b609",
type: "GET",
dataType: "jsonp",
success: function(data){
	var table = '';
	var headd = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;"> Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'

	for (var i = 0; i < data.list.length; i++) {
		table += "<tr>";
table += "<td><img src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
                    table += "<td>" + data.list[i].pressure + "hpa</td>";
                    table += "<td>" + data.list[i].humidity + "%</td>";
                    table += "<td>" + data.list[i].speed + "m/s</td>";
                    table += "<td>" + data.list[i].deg + "&deg;</td>";


		table += "</tr>";


	}

	$("#foreCast").html(table);
	$("#headd").html(headd);
	 $("#city").val('');
	 $("#days").val('')


}





});





} else {

	$("#error").html("<div class= 'alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
}
}
