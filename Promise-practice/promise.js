const pObj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rollNum = [1,2,3,4,]
        resolve(rollNum)
        // reject('Error')
    },1000)
})


const getBio = (rol) => {
    return new Promise((resolve, reject) => {
        setTimeout((rol) => {
            let bio = {
                name: "Mark",
                age: 23
            }
            resolve(`${bio.name}, ${bio.age}, ${rol}`)
        },1000, rol)
    })
}




const house = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let house = {
                house: 'America'
            }
            resolve(house.house)
        },1000)
    })
}




pObj1.then((roll) => {
    console.log(roll);
    return getBio(roll[1])
}).then((bioData) => {
    console.log(bioData);
    return house()
}).then((house) => {
    console.log(house);
}).catch((err) => {
    console.log(err);
})

