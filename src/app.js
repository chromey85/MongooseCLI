require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, update, delete1, find1 } = require("./movie/functions");
const { find } = require("./movie/model");

const app = async (yargsObj) => {
    //console.log(yargsObj)
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.director));
            //Adds to it
        } else if (yargsObj.list) {
            console.log(await list());
            //List it
        } else if (yargsObj.update) {
            console.log(await update(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.newTitle, yargsObj.newActor, yargsObj.newDirector));
            //Update it
        } else if (yargsObj.delete1) {
            console.log(await delete1(yargsObj.title, yargsObj.actor, yargsObj.director));
            //Delete it
        } else if (yargsObj.find1) {
            // console.log(yargsObj.title)
            // console.log(yargsObj.actor)
            // console.log(yargsObj.director)
            console.log(await find1(yargsObj.title, yargsObj.actor, yargsObj.director));
            //Finds it
        } else {
            console.log("Incorrect Command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);