
const express= require("express");
const app = express();
app.listen(3300);

app.use(express.json());


const user = [{
    name : "atom",
    kidneys :[{
        healthy : false
    }]
}];

app.get("/",function(req,res){
    const atomKidney= user[0].kidneys;
    const numberofKidney = atomKidney.length
    let numberofHealthyKidney=0;
    for(let i =0; i<atomKidney.length;i++){
        if(atomKidney[i].healthy){
            numberofHealthyKidney = numberofHealthyKidney + 1 ;
            
        }
    }

    const numberofUnhealthyKideney = numberofKidney - numberofHealthyKidney;

    res.json({
        numberofKidney,
        numberofHealthyKidney,
        numberofUnhealthyKideney
    })
    console.log(atomKidney); 
})

app.post("/",function(req,res){
    const isHealthy =req.body.isHealthy;
    user[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done!!!"
    })
})

app.put("/",function(req,res){
    for(let i =0; i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy =true;
    }
    res.json({
        msg: "update"
    })
})

app.delete("/",function(req,res){
    const newKidney = [];
    for(let i=0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidney.push({
                healthy :true
            })
        }
    }

    user[0].kidneys = newKidney;
    res.json({msg : "done delete"})

})