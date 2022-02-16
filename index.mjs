import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000


app.get("/", (req,res) => {
    
    const helloMessage = `VERSION 2.0Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})


app.listen(PORT, () => {

    console.log(`Web Server is listening at port ${PORT}`)
})

