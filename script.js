const products = [
    { name: "Laptop", price: 1000, image: "https://i5.walmartimages.com/seo/Acer-Chromebook-315-15-6-inch-Laptop-Intel-Processor-N4500-4GB-RAM-64GB-eMMC-Pure-Silver_7956e75e-1d28-444d-ac76-c63cbbbb744e.90a9c0f5e8e74d63881221f2d9de45f8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { name: "Headphones", price: 200, image: "https://i5.walmartimages.com/seo/Bose-QuietComfort-Headphones-Noise-Cancelling-Over-Ear-Wireless-Bluetooth-Earphones-Black_b4f60e4d-0971-42d4-a487-bbe631927fb0.b8b79c4c2e8326b3f7f0d2388c25b697.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { name: "Phone", price: 800, image: "https://i5.walmartimages.com/seo/Straight-Talk-Nokia-HMD-Vibe-64GB-Black-Prepaid-Smartphone-Locked-to-Straight-Talk_504d98eb-4703-43d3-ba29-3763c6526d4b.51f26bc3a78b6db578bc16b4f6a53456.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { name: "Tablet", price: 500, image: "https://i5.walmartimages.com/seo/Samsung-Galaxy-Tab-A9-11-4GB-RAM-64GB-Storage-Navy-Wi-Fi-Tablet-SM-X210NDBAXAR_14fd00d5-2f27-4cd1-ae4b-c269ae88f138.76e1dfe2c7d5ce3ac2e7d6f35fced1f4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { name: "Smartwatch", price: 300, image: "https://i5.walmartimages.com/seo/Forerunner-945-GPS-Running-Smartwatch-in-Black_1e0780f6-184b-498f-baab-73d4b5501cbf_2.4adc69f885e22b41684e4ace182ec099.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
];

const cart = [];

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    products.forEach((product, index) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}

function addToCart(index) {
        // TODO: Implement logic to add product to cart
}

function updateCart() {
    // TODO: Implement logic to update the cart display
}

function removeFromCart(index) {
     // TODO: Implement logic to remove items from the cart
}

// Carousel Navigation
function prevSlide() {
       // TODO: Implement carousel navigation to previous slide
}

function nextSlide() {
    // TODO: Implement carousel navigation to next slide
}

function checkout() {
     // TODO: Implement checkout logic
}

displayProducts();
