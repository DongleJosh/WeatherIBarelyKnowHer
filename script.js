//declaring variables for all inputs and outputs
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

// api key

apik = "3045dd712ffe6e702e3245525ac7fa38"

//convert kelvin to Farenheit lol and KMH to MPH

function conversion(val) {
    return ((val - 273) * 1.8 + 32).toFixed(2)
}

function conversion2(val) {
    return (val * .621371).toFixed(2)
}
//click submit button to submit info

btn.addEventListener('click', function () {

    //api link to get weather info

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())


        .then(data => {

            //collect that information and store it in different constants.

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var wndspd = data['wind']['speed']
            // display the info pulled from API
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} F°</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${conversion2(wndspd)} MPH<span>`

        })

        // if you enter a city name thats not in the API it displays an error message
        .catch(err => alert('You entered Wrong city name'))
})