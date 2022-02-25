const Movie = require("./model");

exports.addMovie = async (title, actor, director) => {
    try {
        //await Movie.create({title: title, actor: actor}); <-- this in longer than the one below
        await Movie.create({ title, actor, director });
        return "Movie Added Successfully"
    } catch (error) {
        console.log(error, "It did not add")
    }
}

exports.list = async (query) => {
    try {
        return await Movie.find({query});
    } catch (error) {
        console.log(error, "Something went wrong")
    }
}

// exports.find1 = async (title, actor, director) => {
//     try {
//         return await Movie.findOne(
//             {title: title},
//             {actor: actor}, 
//             {director:director}
//             );
//     } catch (error) {
//         console.log(error, "I can't find anything")
//     }
// }

exports.find1 = async (findTitle, findActor, findDirector, newTitle, newActor, newDirector) => {
    //console.log("drop in: ", findTitle, findActor, findDirector, newTitle, newActor, newDirector)
    const filter = {}
    if (findTitle) { filter.title = findTitle }
    if (findActor) { filter.actor = findActor }
    if (findDirector) { filter.director = findDirector }
    // console.log("filter: ", filter)

    const find1 = {}
    if (newTitle) { find1.title = newTitle }
    if (newActor) { find1.actor = newActor }
    if (newDirector) { find1.director = newDirector }
    // console.log("update: ", find1)

    try {
        return await Movie.findOne(
            { ...filter },
            { ...find1 }
        )
    } catch (error) {
        console.log(error, "I can't find anything")
    }
}

exports.update = async (findTitle, findActor, findDirector, newTitle, newActor, newDirector) => {
    console.log("drop in: ", findTitle, findActor, findDirector, newTitle, newActor, newDirector)
    const filter = {}
    if (findTitle) { filter.title = findTitle }
    if (findActor) { filter.actor = findActor }
    if (findDirector) { filter.director = findDirector }
    console.log("filter: ", filter)

    const update = {}
    if (newTitle) { update.title = newTitle }
    if (newActor) { update.actor = newActor }
    if (newDirector) { update.director = newDirector }
    console.log("update: ", update)

    try {
        return await Movie.updateOne(
            { ...filter },
            {
                $set: { ...update }
            },
        )
    } catch (error) {
        console.log(error)
    }
}

// exports.update = async (findTitle, findActor, findDirector, newTitle, newActor, newDirector) => {
//     console.log(findTitle)
//     console.log(findActor)
//     console.log(findDirector)
//     console.log(newTitle)
//     console.log(newActor)
//     console.log(newDirector)
//     try {
//         return await Movie.updateOne(
//             {
//                 title: findTitle,
//                 actor: findActor,
//                 director: findDirector
//             }, {
//                 title: newTitle,
//                 actor: newActor,
//                 director: newDirector
//             }
//         )
//     } catch (error) {
//         console.log(error, "It did not update")
//     }
// }

// exports.update = async (title, actor, director) => {
//     try {
//         return await Movie.updateOne(
//             { title },
//             {
//                 $set: {
//                     title,
//                     actor,
//                     director
//                 }
//             },
//         )
//     } catch (error) {
//         console.log(error, "It did not update")
//     }
// }

exports.delete1 = async () => {
    try {
        return await Movie.deleteOne({})
    } catch (error) {
        console.log(error, "It did not Delete")
    }
}
