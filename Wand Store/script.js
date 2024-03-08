// Sample wand data
const wands = [
    {
        name: "Phoenix Feather Wand",
        image: "players-can-wield-power-phoenix-feather-wand-ai-generated-art_848850-1742.jpg",
        description: "This wand is made with a core of phoenix feather, known for its powerful magic.",
        price: 50
    },
    {
        name: "Dragon Heartstring Wand",
        image: "james.jpg",
        description: "Crafted with a dragon heartstring core, this wand is perfect for casting powerful spells.",
        price: 60
    },
    {
        name: "Unicorn Hair Wand",
        image: "andrew1.jpg",
        description: "The unicorn hair core of this wand grants it a unique connection to healing and protection magic.",
        price: 55
    }
    
];

let checkoutTotal = 0;

// Function to display wands in the HTML
function displayWands() {
    const wandList = document.getElementById("wand-list");
    const checkoutBtn = document.getElementById("checkout-btn");
    const thankYouMessage = document.getElementById("thank-you-message");

    wands.forEach(wand => {
        const wandDiv = document.createElement("div");
        wandDiv.classList.add("wand");

        const image = document.createElement("img");
        image.src = wand.image;
        image.alt = wand.name;

        const name = document.createElement("h3");
        name.textContent = wand.name;

        const description = document.createElement("p");
        description.classList.add("wand-description");
        description.textContent = wand.description;

        const price = document.createElement("p");
        price.classList.add("wand-price");
        price.textContent = "$" + wand.price;

        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("add-to-cart-btn");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", function() {
            checkoutTotal += wand.price;
            updateCheckoutTotal();
        });

        wandDiv.appendChild(image);
        wandDiv.appendChild(name);
        wandDiv.appendChild(description);
        wandDiv.appendChild(price);
        wandDiv.appendChild(addToCartBtn);

        wandList.appendChild(wandDiv);
    });

    checkoutBtn.addEventListener("click", function() {
        // Hide wand list and checkout button
        wandList.style.display = "none";
        checkoutBtn.style.display = "none";

        // Display thank you message with checkout total
        thankYouMessage.textContent = "Thank you for your purchase! Your total is $" + checkoutTotal + ".";
        thankYouMessage.style.display = "block";
    });
}

// Update the checkout total displayed in the UI
function updateCheckoutTotal() {
    const checkoutTotalDisplay = document.getElementById("checkout-total");
    checkoutTotalDisplay.textContent = "$" + checkoutTotal;
}

// Display wands when the "Start Shopping" button is clicked
document.getElementById("start-shopping-btn").addEventListener("click", function() {
    const welcomePage = document.getElementById("welcome-page");
    welcomePage.style.display = "none";
    displayWands();
});