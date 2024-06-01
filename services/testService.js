let testService = ()=>{
    
    try {
        // console.log("hello word")
        let string = ["hello world", "test"]
        return string;
    } catch (error) {
        console.log(error)
    }
}
// test()
module.exports = { testService };