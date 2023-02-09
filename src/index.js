const express = require("express");
const { PORT } = require('./config/serverconfig');

const SetupAndStartServer = async() => {

    //CREATE THE EXPREE OBJECT
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
    })
}

SetupAndStartServer();