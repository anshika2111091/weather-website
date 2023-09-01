const { query } = require("express");

function getdata()
{
    const x=search.value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+x;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3663a8d5ccmsh06019e79637d635p186a39jsn7f5c828bfa4f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options).then(response=>response.json())
	
	.then(result=>{
        console.log(result);
       temp.innerText=result.temp;
        ws.innerText=result.wind_speed;
         humidity.innerText=result.humidity;
    })
.catch (error => {
	console.error(error);
})

}