const menuItems = {
    "Margherita": {
        description: "Mozzarella, tomatoes", image: "margherita"},
    "Pepperoni": {
        description: "Pepperoni, mozzarella, tomato sauce", image: "pepperoni"},
    "Chicken BBQ": {
        description: "Grilled chicken, BBQ sauce, onions, mozzarella", image: "bbqchicken"},
    "Vegetarian": {
        description: "Bell peppers, olives, onions, tomatoes, mozzarella", image: "vegetarian"},
    "Four Cheese": {
        description: "Mozzarella, gorgonzola, parmesan, ricotta", image: "fourcheese"},
};

function createMenu () {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");


    Object.keys(menuItems).forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <p>${item}</p><img src="${menuItems[item].image}.png" alt="Potato">
            <p>${menuItems[item].description}</p>
        `;
        menuDiv.appendChild(menuItem);
    });

return menuDiv;
};