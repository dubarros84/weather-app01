// const uri = 'https://locationiq.org/v1/search.php?key='
// const apiKey = 'e20aec2a5e1ab86a4488'
const api2 = 'bdbf726718cb74df56bb709e100db88c'
const getInfo = document.getElementById('weather')
let city = 'Toronto'
let country = 'Canada'
//let url = 'http://api.openweathermap.org/data/2.5/weather?q=vancouver,canada&appid='
let url = 'http://api.openweathermap.org/data/2.5/weather?q='



getInfo.addEventListener('submit',(e)=>{
	e.preventDefault()
	fetchWeather(weather())
})


function fetchWeather () {
fetch(`${url}${city}${country}&appid=${api2}`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		show(data)

	})	
}



function weather() {

city = document.getElementById('city').value;

country = document.getElementById('country').value;

}

       
        const img = document.createElement('img')
        img.id = 'conditionimg'
        const img1 = document.createElement('img')
        img1.id = 'tempimg'
        
        img.src='https:'+data.current.condition.icon
        li.appendChild(img)
          ul.appendChild(li)
          div.appendChild(ul)

function show(app) {
             
        let html = '<ul>';
        html += '<li>' + app.name + ' </li>' + '<li>' + convertKelvinToCelsius(app.main.temp) + ' </li>' + '<li>' + app.weather[0].description + ' </li> </ul>'
              
     
        document.getElementById('display').innerHTML = html;
     
      }



function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return Math.floor(kelvin-273.15);
	}
}