express = require("express")
indexRouter = require("./routes/index")
app = express()

app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"))
app.use(indexRouter)

app.listen(process.env.PORT || 5000,()=>{console.log("Server Started on 5000");
})