const express = require("express");
const app = express();
const axios = require("axios");

const externalApi = "https://lereacteur-marvel-api.herokuapp.com";
const apiKey = process.env.API_KEY || "QmD64gFUgsDCGuIK";

app.get("/comics", function (req, res) {
  console.log("get comics", req.query);
  axios
    .get([externalApi, "comics"].join("/"), {
      params: {
        ...req.query,
        apiKey,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/characters", function (req, res) {
  console.log("get characters", req.query);
  axios
    .get([externalApi, "characters"].join("/"), {
      params: {
        ...req.query,
        apiKey,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/comics/:charId", function (req, res) {
  console.log("get characters comics", req.query);
  axios
    .get([externalApi, "comics", req.params.charId].join("/"), {
      params: {
        ...req.query,
        apiKey,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(process.env.PORT || 3000);
