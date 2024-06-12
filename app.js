const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {patientmodel}=require("./models/patient.js")


const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://feb:febin4475@cluster0.pydodfi.mongodb.net/PatientDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/", (req, res) => {
    let input = req.body
    let patient = new patientmodel(input)
    patient.save()
    res.json({ "status": "Success" })
})


app.listen(8080, () => {
    console.log("Server Started")
})
