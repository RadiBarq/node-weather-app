const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=84dc24a6387f03b2319ace30f96658a8&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. But it feels like ' + response.body.current.feelslike + ' degrees out')
})


let geoCodingURL = "http://api.weatherstack.com/current?access_key=84dc24a6387f03b2319ace30f96658a8&query=37.8267,-122.4233&units=f"
request({url: geoCodingURL, json: true}, (error, response) => {
    let coordinates = response.body.features[0]
    console.log("lat is " + coordinates[0] + "long is " + coordinates[1])
})

// Geocoding
// Address -> Lat/Long -> Weather 

// So the goal currently is using the lat and long for los angles and what we are seeing in the browser also