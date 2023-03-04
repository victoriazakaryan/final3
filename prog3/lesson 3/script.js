// //let platform = require("os")
// //console.log(platform.platform());

let express = require("express")
let app = express()

app.get("/", function(req, res){
 res.send("Hello world")
})



 app.get("/names/:name", function(req, res){
     let name = req.params.name
     res.send(`<h1>Hello ${name}</h1>`)
    
 })
 app.get("/google", function(req, res){
      res.redirect( 'http://google.com')   
})
app.get("/google/:search", function(req, res){
    let search = req.params.search
  res.search(`https://google.com/search?q=${search}`)
})
app.get("/*", function(req, res){
   res.send("404")
})

 app.listen(3000, function(){
     console.log("Port: 3000")
 })