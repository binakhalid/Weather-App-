$(document).ready(function(){
	$("#submitCity").click(function(){

    return getWeather();

	});

});
function getWeather(){
	var city = $("#city").val();
	if(city != ''){
		$.ajax({
			url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
			"&APPID=ccf5e7036115050708a555bb11f8b609",
			type: "GET",
			dataType:"jsonp",
			success: function(data){
				var widget = showResults(data)
				console.log(data)
				$("#showWeather").html(widget);
			$("#city").val('');
			}
		});
	


}else {
	$("#error").html("<div class= 'alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");


}


}

function showResults(data){
return '<h2 id="headin" class="text-center">Current Weather for  '+data.name+' , '+ data.sys.country+' </h2>' +

"<h3 style='padding-left:40px;' >Weather: "+data.weather[0].main+"</h3>" +
"<h3 style='padding-left:40px;' >description: <img src ='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description+"</h3>"+
"<h3 style='padding-left:40px;' >Weather Temperature: "+data.main.temp+" &deg;C</h3>" +
		"<h3 style='padding-left:40px;' >Pressure: "+data.main.pressure+" hpa </h3>" +
		"<h3 style='padding-left:40px;' >Humidity: "+data.main.humidity+" % </h3>" +
		"<h3 style='padding-left:40px;' > Min Temperature: "+data.main.temp_min+" &deg;C</h3>" +
		"<h3 style='padding-left:40px;' > Max Temperature: "+data.main.temp_max+" &deg;C</h3>" +
		"<h3 style='padding-left:40px;' > Wind Speed: "+data.wind.speed+" m/s</h3>" +
		"<h3 style='padding-left:40px; padding-bottom:30px;' > Wind Direction: "+data.wind.deg+" &deg; </h3>";



}