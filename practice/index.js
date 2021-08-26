const info = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let information = {
                inf : "Good Boy"
            }
            reject(information.inf)
        },1000)
    })
}


const informationShow = async () => {
    try{
        const infoData = await info()
        console.log(infoData);
    }catch(error){
        console.log(`The Error Is : ${error}`);
    }
}
informationShow()