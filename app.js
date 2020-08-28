const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (!location) {
  return console.log("Please provide an location");
} else {
  geocode(location, (err, { latitude, longitude }) => {
    if (err) {
      return console.log(err);
    }
    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(latitude, longitude);
      console.log(forecastData);
    });
  });
}
