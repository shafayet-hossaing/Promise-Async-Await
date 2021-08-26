const getBio = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let bio = {
                name : "Mark",
                age: 23
            }
            resolve(`${bio.name} = ${bio.age}`)
        },1000)
    })
}


const house = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let house = {
                house : "America"
            }
            resolve(house.house)
        },2000)
    })
}

// getBio().then((bioData) => {
//     console.log(bioData);
//     return house()
// }).then((house) => {
//     console.log(house);
// })




// async & await
const bioData = async () => {
    const getBioData = await getBio()
    console.log(getBioData);

    const getHouse = await house()
    console.log(getHouse);
}

bioData()