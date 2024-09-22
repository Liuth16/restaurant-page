function createHome (){
    const images = require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/);

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = "Welcome to La torre";

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = `At La torre, we bring you the authentic taste of Italy with our handcrafted pizzas made from the freshest ingredients. 
        Whether you're craving a classic Margherita, a bold pepperoni, or something more adventurous, we have the perfect pizza for you.`;

    const createImage = document.createElement("img");
    createImage.src = images("./pizza-main.png")
    createImage.alt = "Home image";

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");


    titleDiv.appendChild(titleParagraph);
    mainDiv.appendChild(titleDiv);

    imageDiv.appendChild(createImage);
    mainDiv.appendChild(imageDiv);

    descriptionDiv.appendChild(descriptionParagraph);
    mainDiv.appendChild(descriptionDiv);

    return mainDiv;
}

export {createHome};