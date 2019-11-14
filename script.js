window.onload = async () => {
    let username = "user22"
    let passkey = "ykeZdCYNLs2dqbMc"
    let token = btoa ( username + ":" + passkey)

    let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/product/",{
        headers:{
        "Authorization":"Basic " + token
        }
    })
    
    let jsonResponse = await response.json()
    

    document.querySelector("#productsColumn").innerHTML = jsonResponse.map(products =>`
    <div>
        <img src="${products.imageUrl} style="width:100%"/>
        <p>${products.name} - ${products.price}</p>
    </div>
    `).join("")

    console.log (jsonResponse)
}

addProduct = async (product) => {
    let username = "user22"
    let passkey = "ykeZdCYNLs2dqbMc"
    let token = btoa ( username + ":" + passkey)

    let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/product/",{
        method: "POST",
        body: JSON.stringify(product),
        headers:{
        "Authorization":"Basic " + token,
        "Content-type" : "application/json"
        }
    })
    let jsonResponse = await response.json()
    console.log (jsonResponse)
}