const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "nam":String,
        "age":String,
        "gen":String,
        "mob":String,
        "addr":String,
        "bg":String,
        "dnam":String
    }
)
let patientmodel=mongoose.model("patients",schema);
module.exports={patientmodel}


