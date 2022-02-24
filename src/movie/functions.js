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

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error, "Something went wrong")
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
