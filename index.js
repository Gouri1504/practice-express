const Express=require("express")
const App=Express()
App.get('/',(req,res)=>{
    res.send(`<h1>Hello </h1>`)

})
App.listen(8080,()=>{console.log("App is running on port 8080")})