let productsContainer = document.querySelector(".products");
const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=8");
    const data = await response.json();
    return data.products;
};
console.log(productsContainer);

const initApp = async () => {
    const products = await getProducts();
    products.forEach((product) => {
        productsContainer.innerHTML += `
        <div class="product">
            <div class="image">
                <img
                    src="${product.thumbnail}"
                    alt="product image"
                />
            </div>
            <div class="text">
                <h2>${product.title}</h2>
                <p class="des">
                    ${product.description}
                </p>
                <p class="price">
                    <span class="after-discount">${product.price}$</span>
                    <span class="befor-discount">${
                        product.price + product.discountPercentage
                    }$</span>
                </p>
            </div>
            <div class="buttons">
                <button class="add">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <path
                            d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                            stroke="white"
                            stroke-width="2"
                        />
                    </svg>
                    Add to cart
                </button>
                <button class="fav">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.56335 17.3853L14.3153 25.6068C14.6398 25.9116 14.802 26.064 15 26.064C15.198 26.064 15.3602 25.9116 15.6847 25.6068L15.6847 25.6068L24.4367 17.3853C26.8819 15.0882 27.1788 11.3082 25.1223 8.65758L24.7356 8.15918C22.2753 4.98822 17.337 5.52002 15.6083 9.14206C15.3641 9.6537 14.6359 9.6537 14.3917 9.14206C12.663 5.52002 7.72465 4.98823 5.26443 8.15918L4.87773 8.65759C2.82118 11.3083 3.11813 15.0882 5.56335 17.3853Z"
                            stroke="#007BFF"
                            stroke-width="2"
                        />
                    </svg>
                </button>
            </div>
    </div>
        `;
    });
};

initApp();
