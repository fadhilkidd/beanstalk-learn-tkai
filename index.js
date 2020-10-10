const express = require('express')
const app = express()
const port = process.env.PORT || 8000

global.ppath = require("app-root-path") + "/";

app.get('/', (req, res) => {
    res.sendFile(ppath + "index.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})