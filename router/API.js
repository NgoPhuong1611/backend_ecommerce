// const express = require("express");
import express from "express";

// import testController from "../controller/testController";
const testController  = require("../controller/testController");

let router = express.Router();

let initRouter = (app) => {
     router.get('/test', testController.getTest);
    return app.use('/', router);
}

module.exports = initRouter


