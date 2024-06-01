const { testService } = require("../services/testService")

let getTest =(req, res) => {
    let test = testService()
    return res.status(200).json(test) 
}
// testController()
module.exports = {getTest};