(function () {
      
    const products = [
        {
        
            id: 1,
            title: "Baby Yoda",
            img: "img/baby-yoda.svg",
            discription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            price: 10.99
        },
        {
        
            id: 2,
            title: "girl",
            img: "img/girl.svg",
            discription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            price: 11.99
        },
        {
        
            id: 3,
            title: "banana",
            img: "img/banana.svg",
            discription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            price: 15.99
        },
        {
        
            id: 4,
            title: "viking",
            img: "img/viking.svg",
            discription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            price: 20.99
        },
           
    ];

    function renderProduct(products) {
        const productsContainer = document.querySelector('.main-products__list');
         productsContainer.innerHTML = ``;
        
        for (const product of products) {
            productsContainer.innerHTML += `<article class="product-card">
            <img
              class="product-card__image"
              src="${product.img}"
              alt="${product.title}"
            />
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">
             ${product.discription}
            </p>
            <div class="product-card__buttons">
              <button class="product-card__buttons-info button button-card">
                Info
              </button>
              <button class="product-card__buttons-buy button button-card">
                Buy ${product.price}
              </button>
            </div>
          </article>`
        }
    }

    renderProduct(products);

})();