function updateProducts(category) {
    const productData = {
        "novelty-socks": [
            { name: "Striped Socks", price: 10.00, description: "Comfortable striped socks for everyday wear." },
            { name: "Fortnite Socks", price: 15.00, description: "Cool Fortnite-themed socks for gamers." },
            { name: "Alligator Socks", price: 20.00, description: "Fun alligator socks to brighten your day." }
        ],
        "unique-mugs": [
            { name: "Cat Mug", price: 8.00, description: "Cute cat mug for your morning coffee." },
            { name: "Dog Mug", price: 9.00, description: "Adorable dog mug for pet lovers." },
            { name: "Unicorn Mug", price: 12.00, description: "Magical unicorn mug for a touch of whimsy." }
        ],
        "quirky-stationary": [
            { name: "Funky Notebook", price: 5.00, description: "A funky notebook for all your notes and doodles." },
            { name: "Cool Pen", price: 3.00, description: "A cool pen to make writing fun." },
            { name: "Sticky Notes", price: 2.00, description: "Colorful sticky notes for reminders and messages." }
        ],
        "american-candy": [
            { name: "Reese's", price: 1.50, description: "Delicious peanut butter cups.", ingredients: "Peanuts, Sugar, Cocoa Butter, Milk Fat, Soy Lecithin.", nutrition: "Calories: 210, Fat: 13g, Carbs: 24g, Protein: 5g", dietary: "Gluten Free" },
            { name: "Hershey's", price: 1.75, description: "Classic milk chocolate bar.", ingredients: "Milk, Sugar, Cocoa Butter, Chocolate, Lecithin, PGPR.", nutrition: "Calories: 220, Fat: 13g, Carbs: 25g, Protein: 3g", dietary: "Gluten Free" },
            { name: "Twizzlers", price: 2.00, description: "Chewy strawberry-flavored candy.", ingredients: "Corn Syrup, Wheat Flour, Sugar, Cornstarch, Palm Oil.", nutrition: "Calories: 120, Fat: 1g, Carbs: 29g, Protein: 1g", dietary: "Vegan" }
        ],
        "gourmet-popcorn": [
            { name: "Caramel Popcorn", price: 4.00, description: "Sweet and crunchy caramel popcorn.", ingredients: "Popcorn, Sugar, Butter, Corn Syrup, Salt.", nutrition: "Calories: 150, Fat: 8g, Carbs: 20g, Protein: 1g", dietary: "Gluten Free" },
            { name: "Cheese Popcorn", price: 4.50, description: "Savory cheese-flavored popcorn.", ingredients: "Popcorn, Cheese Powder, Butter, Salt.", nutrition: "Calories: 160, Fat: 10g, Carbs: 15g, Protein: 3g", dietary: "Gluten Free" },
            { name: "Butter Popcorn", price: 3.50, description: "Classic butter-flavored popcorn.", ingredients: "Popcorn, Butter, Salt.", nutrition: "Calories: 140, Fat: 9g, Carbs: 14g, Protein: 2g", dietary: "Gluten Free" }
        ],
        "themed-chocolate": [
            { name: "Star Wars Chocolate", price: 5.00, description: "Star Wars-themed chocolate bar.", ingredients: "Milk, Sugar, Cocoa Butter, Chocolate, Lecithin, PGPR.", nutrition: "Calories: 220, Fat: 13g, Carbs: 25g, Protein: 3g", dietary: "Gluten Free" },
            { name: "Marvel Chocolate", price: 5.50, description: "Marvel-themed chocolate bar.", ingredients: "Milk, Sugar, Cocoa Butter, Chocolate, Lecithin, PGPR.", nutrition: "Calories: 220, Fat: 13g, Carbs: 25g, Protein: 3g", dietary: "Gluten Free" },
            { name: "Disney Chocolate", price: 6.00, description: "Disney-themed chocolate bar.", ingredients: "Milk, Sugar, Cocoa Butter, Chocolate, Lecithin, PGPR.", nutrition: "Calories: 220, Fat: 13g, Carbs: 25g, Protein: 3g", dietary: "Gluten Free" }
        ]
    };

    const products = productData[category];
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';
        productBox.innerHTML = `
            <p>${product.name}</p>
            <p class="price">£${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            ${product.ingredients ? `<p class="ingredients"><strong>Ingredients:</strong> ${product.ingredients}</p>` : ''}
            ${product.nutrition ? `<p class="nutrition"><strong>Nutrition:</strong> ${product.nutrition}</p>` : ''}
            ${product.dietary ? `<p class="dietary"><strong>Dietary:</strong> ${product.dietary}</p>` : ''}
            <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(productBox);
    });
}