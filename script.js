let url = "93cf8b461875a73100e8f300e649a579"
let weatherDiv = document.querySelector('.weather')
let weatherInp = document.querySelector('.weather-response')
let weatherBtn = document.querySelector('.weather-button')
weatherBtn.addEventListener('click',function(){
    let weatherInpVal = weatherInp.value
    let divResult = document.querySelector('.weather-total')
    divResult.innerHTML = '';
    let weatherApiKey = "93cf8b461875a73100e8f300e649a579"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInpVal}&appid=${weatherApiKey}&units=metric&lang=uk`,{method:"GET"})

    
    .then(Response =>{
        if(!Response.ok){
            console.log(Response)
        }
        return Response.json()
    })
    .then(data=>{
        console.log(data)
        let cityName = document.createElement('h2')
        cityName.textContent = `City:${data.name}`
        divResult.appendChild(cityName)
        let weatherTemp = document.createElement('p')
        weatherTemp.textContent =`Temp:${Math.floor(data.main.temp)}° `
        divResult.appendChild(weatherTemp)
        let country = document.createElement('p')
        country.textContent = `Country:${data.sys.country}`
        divResult.appendChild(country)
        let winds = document.createElement('p')
        winds.textContent = `wind:${data.wind.speed}`
        divResult.appendChild(winds)
        let weathers = document.createElement('p')
        weathers.textContent = `weather:${data.weather[0].main}`
        divResult.appendChild(weathers)
        
        let weatherIcon = document.createElement('img')
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherIcon.alt = data.weather[0].description
            divResult.appendChild(weatherIcon)
    })
    .catch(error =>{
        console.error(error)
    })
})

