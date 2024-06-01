import express from "express";
let configViewEngine = (app)=>{
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");// tuong duong jsp, blade
}
module.exports=configViewEngine;