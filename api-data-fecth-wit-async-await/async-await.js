const apiData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => displayData(data))

                const displayData = (posts) =>{
                    const display = document.getElementById('display')
                    for(const post of posts){
                        const divForDisplay = document.createElement('p')
                        divForDisplay.innerText = `${post.title} : ${post.body}`
                        display.appendChild(divForDisplay)
                    }
                }
        },3000)
    })
}



const getApiDat = async () => {
    const postData = await apiData()
    console.log(postData);
}
getApiDat()