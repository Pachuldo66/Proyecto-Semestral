window.addEventListener('load',()=>{
    let lon
    let lat

    //Aqui se declaran las variables del documento HTML
    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let IconoAnimado = document.getElementById('icono-animado')
    let VientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            console.log(posicion.coords.latitude);
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={98534ed2c79b24a275b1ea6703b97592}'
            //console.log(url)
            fetch(url)
             .then(response =>{return response.json()})
             .then(data =>{
             
                 let temp = Math.round(data.main.temp)
                 temperaturaValor.textContent ='$(temp) C'
                 
                 let desc = data.weather[0].description
                 temperaturaDescripcion.textContent = desc.toUpperCase()
                 ubicacion.textContent = data.name
                 VientoVelocidad.textContent = '${data.wind.speed}m/s'
                 //console.log(data.wind.speed)

                 //Iconos Estaticos
                /*  console.log(data.weather[0].icon)
                 let iconCode = (data.weather[0].icon)
                 const urlIcon = 'http://openweathermap.org/img/wn/${iconCode}.png'
                 conosle.log(urlIcon) */

                 //Iconos Animados 
                 console.log(data.weather[0].main)
                 switch(data.weather[0].main){
                     case 'Atmosphere':
                        IconoAnimado.src = 'animated/weather.svg'
                        console.log('ATMOSFERA')
                        break;
                     case 'Clear':
                     IconoAnimado.src = 'animated/day.svg'
                     console.log('LIMPIO')
                     break;

                     case 'Clouds':
                     IconoAnimado.src = 'animated/cloudy-day-1.svg'
                     console.log('NUBLADO')
                     break;

                     case 'Thunderstorm':
                     IconoAnimado.src = 'animated/thunder.svg'
                     console.log('TORMENTA')
                     break;

                     case 'Drizzle':
                     IconoAnimado.src = 'animated/rainy-2.svg'
                     console.log('LLOVIZNA')
                     break;
                     
                     case 'Rain':
                     IconoAnimado.src = 'animated/rainy-7.svg'
                     console.log('LLUVIA')
                     break;
                     case 'Snow':
                     IconoAnimado.src = 'animated/snowy-6.svg'
                     console.log('NIEVE')
                     break;
                 }
             })
             .catch(error =>{
                 console.log(error)
             })
        })
    }
})