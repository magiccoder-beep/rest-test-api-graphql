const menu = {
    appetizers: [
        { name: 'Iceberg Wedge Salad with House Cured Bacon', description: 'tomato salsa gorgonzola', price: 7.50 },
        { name: 'Sautéed Shredded Brussels Sprouts', description: 'bacon hazelnuts gorgonzola', price: 6.95 },
        { name: 'Kale Salad', description: 'parmesan crisp corn radish garlic-lemon vinaigrette', price: 7.50 },
        { name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto', description: 'grilled tomato salsa crostini', price: 6.95 },
        { name: 'Chicken and Cabbage Eggrolls', description: 'hot & sour dipping sauce', price: 6.95 },
    ],
    entrees: [
        { name: 'Farfalle Pasta with Braised Pork in Tomato Cream', description: 'capers butternut squash kale', price: 12.95 },
        { name: 'Stout Braised Bratwurst', description: 'horseradish mashed potatoes roasted root veggies grilled onion', price: 13.95 },
        { name: 'Salmon & Crispy Tofu in Yellow Curry Sauce', description: 'vegetable sauté golden raisin chutney', price: 15.95 },
        { name: 'Sesame Shrimp', description: 'udon noodles ramen broth shiitake mushrooms bean sprouts scallions', price: 13.95 },
    ],
    sandwiches: [
        { name: 'Turkey & Avocado', description: 'with tomato', price: 7.95, type: 'cold' },
        { name: 'Pub Club', description: 'turkey, bacon, lettuce, tomato', price: 7.95, type: 'cold' },
        { name: 'Rare Roast Beef & Swiss', description: 'sweet-hot mustard, lettuce, red onion', price: 7.95, type: 'cold' },
        { name: 'Veggie', description: 'pepper jack, avocado, sprout, tomato', price: 7.95, type: 'cold' },
        { name: 'Southwest Chicken Breast', description: 'Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese', price: 9.50, type: 'hot' },
        { name: 'Portobello Fresh Mozzarella', description: 'Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli', price: 9.50, type: 'hot' },
        { name: 'Chipotle BBQ Pork Sandwich', description: 'with Pickled Jalapeño Slaw', price: 9.50, type: 'hot' },
        { name: 'Bacon Burger', description: 'Swiss, Lettuce, Tomato', price: 9.25, type: 'hot' },
        { name: 'Mexi Burger', description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole', price: 9.25, type: 'hot' },
        { name: 'Herb Marinated Top Sirloin', description: 'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia', price: 10.95, type: 'hot' },
        { name: 'Roast Beef with Ancho Au Jus', description: 'Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette', price: 9.75, type: 'hot' },
        { name: 'Blackened Catfish', description: 'Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough', price: 9.75, type: 'hot' },
    ],
    // Add other categories similarly...
};

module.exports = menu;
