const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6c682bba33554780ad595812241907",
    "x-rapidapi-host": "http://api.weatherapi.com",
  },
};

const getweather=(city)=>{
	cityname.innerHTML = city
	fetch(
		"https://api.weatherapi.com/v1/current.json?key=6c682bba33554780ad595812241907&q=hisar&aqi=yes" ,options
	)
	.then((response) => response.json())
	.then((response) => {
		
		temp_c.innerHTML= response.temp_c
		temp_f.innerHTML= response.temp_f
		wind_kph.innerHTML= response.wind_kph
		wind_mph.innerHTML= response.wind_mph
		wind_degree.innerHTML= response.wind_degree
		wind_dir.innerHTML= response.wind_dir
		pressure_mb.innerHTML= response.pressure_mb
		humidity.innerHTML= response.humidity
		cloud.innerHTML= response.cloud
		feelslike_c.innerHTML= response.feelslike_c
		feelslike_f.innerHTML= response.feelslike_f 
		heatindex_c.innerHTML= response.heatindex_c 
		console.log(response);
	})
	.catch((err) => console.error(err));
	
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(home.value)
})

getweather ( cityname)