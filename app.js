const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=84dc24a6387f03b2319ace30f96658a8&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. But it feels like ' + response.body.current.feelslike + ' degrees out')
})

let geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFkaWJhcmFxIiwiYSI6ImNrdHFiNzF0ZzB1eGMybm1wdm01dmQ5dmsifQ.Yla452h33DKewn4M-69T0A"
request({url: geocodingURL, json: true}, (error, response) => {
    let coordinates = response.body.features[0].geometry.coordinates
    console.log("lat is " + coordinates[0] + " and long is " + coordinates[1])
})

// Geocoding
// Address -> Lat/Long -> Weather 

// So the goal currently is using the lat and long for los angles and what we are seeing in the browser also