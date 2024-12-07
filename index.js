const express = require('express')
const app = express();

app.get("*", (req, res) => {
    res.send("HI")
})

app.listen(3005, () => {
    console.log("Listening on 3005");
})