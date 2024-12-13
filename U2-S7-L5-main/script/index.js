
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMDA3ZGQyMjA3MTAwMTVkZTJmNTYiLCJpYXQiOjE3MzQwODI2ODYsImV4cCI6MTczNTI5MjI4Nn0.EO6usQfczZ48u-5mOk9teXN5mR4i-V3ABNdk-B-8UuY";

const url = "https://striveschool-api.herokuapp.com/api/product/";

const cardContainer = document.getElementById("cardContainer");
const cardsRow = document.getElementById("cardsRow")


cardContainer.appendChild(cardsRow);

function createCard(product) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3 mb-4"
    cardsRow.appendChild(col);
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <div class="card h-100 d-flex flex-column">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" style="min-height: 200px; object-fit: cover; min-width:30%">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${product.name}</h5>
              <p id="brand">Brand <br> ${product.brand}</p>
              <p id="price">Prezzo <br> ${product.price}€</p>
              <a href="details.html?id=${product._id}" class="btn btn-primary m-2">More Details</a>
              <a href="backOffice.html?id=${product._id}" class="btn btn-primary m-2">Modifica</a>
            </div>
          </div>
          `;

          col.appendChild(card);
          
}

fetch(url, {
    headers : {
        "Authorization" : `Bearer ${accessToken}`
    }
})
.then(response => {
    if(response.ok){
    return response.json();
}else {
    throw new Error("Errore durante l'invio del prodotto");
  }
})
.then(products => {
    products.forEach(product => {
        createCard(product);
    })
})
.catch(err => console.log(err));

