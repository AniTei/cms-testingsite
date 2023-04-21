
//connect?

/* const apiBase = "http://cross-course.local/"
const woocommerceBase = "wp-json/wc/store/"
const productsBase = "products"
 */



const jacketsContent = document.querySelector(".content-container");

const url = "http://cross-course.local/wp-json/wc/store/products";

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getJackets() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        jacketsContent.innerHTML = "";

        for (let i = 0; i < data.length; i++) {

            console.log(data[i].id);

            jacketsContent.innerHTML += `


                <div class="product-in-list list-grid layout1000">
                
                    <a href="product-specific.html?id=${data[i].id}"> 

                    <div class="list-head">
                        <h2 class="name-jacket"> ${data[i].name}</h2> 
                        <p class="prod-price"> ${data[i].price_html} </p>
                    </div>
                
                    <img src="${data[i].images[0].thumbnail}" alt="${data[i].images[0].alt}" class="product-img list-img">
                    </a>
                    
                    <div class="list-info">
                        <p class="prod-text">${data[i].description} </p>
                    </div> 

                    <div class="list-btns">
                        <p class="cta">sold out :(</p>
                        <a href="product-specific.html?id=${data[i].id}" class="cta">read more</a>
                    </div>  
                    
                </div> `;

        }

    }

    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        jacketsContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

getJackets();





/* 
jacketsContent.innerHTML = `<div> <h2>Jacket name</h2


</div>`
console.log ("hello"); */