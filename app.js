express = require("express")
indexRouter = require("./routes/index")
app = express()

app.set("view engine","ejs")
app.use(indexRouter)

app.listen(3000,()=>{console.log("Server Started on 3000");
})