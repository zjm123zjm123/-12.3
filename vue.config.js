const data=require("./mock/mock.json")

module.exports={
    devServer:{
        before(app){
            app.get("/getbook",(req,res)=>{
                res.send(data.hotdata)
            })
        }
    }
}
