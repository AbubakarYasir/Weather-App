const express = require("express");
const http = require("http");
const port = 3000;

const app = express();

app.get("/", function (req, res) {
    http.get(
        "http://api.weatherapi.com/v1/current.json?key=71ae3d627a7a45b3902201828222802&q=Lahore&aqi=yes"
    );
    res.send("Server is Up and Running");
    console.log("Server is Up and Running");
});

app.listen(port, function () {
    console.log("The Server is ready at http://localhost:" + port);
});
