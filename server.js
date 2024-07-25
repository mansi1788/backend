let http=require("http")
let fs=require("fs");
console.log("starting the server")
http.createServer((req,res)=>{
   
    fs.readFile('index.html',(err,data)=>{
        if(!err){
       res.writeHead(200,{
        "Content-Type":"text/html",
       });
       res.write(data); //
       return res.end();
        }
        res.write("error while reading"+err)
        return res.end();
    })
})
.listen(8080);

//loop BACK ADDRESS.