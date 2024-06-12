const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { patientmodel } = require("./models/patient.js")


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

app.post("/search", (req, res) => {
    let input = req.body
    patientmodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        })

})

app.get("/ViewAll", (req, res) => {
    patientmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch((error) => {
        res.json(error)
    })

})


app.listen(8080, () => {
    console.log("Server Started")
})
