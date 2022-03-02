const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    const chosenCity = "Lahore";
    const url =
        "http://api.weatherapi.com/v1/current.json?key=71ae3d627a7a45b3902201828222802&q=" +
        chosenCity +
        "&aqi=yes";

    http.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const cityName = weatherData.location.name;
            const countryName = weatherData.location.country;
            const temp = weatherData.current.temp_c;
            const condition = weatherData.current.condition.text;
            res.send(
                "<h1>Live Weather</h1>" +
                    "The temperature in " +
                    "<strong>" +
                    cityName +
                    ", " +
                    countryName +
                    "</strong>" +
                    " is " +
                    "<strong>" +
                    temp +
                    "</strong>" +
                    " degree Celcius." +
                    "<br> The condition is " +
                    "<strong>" +
                    condition +
                    "</strong>"
            );
        });
    });
    console.log("Server is Up and Running");
});

app.listen(port, function () {
    console.log("The Server is ready at http://localhost:" + port);
});
