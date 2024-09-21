function createHome (){
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = "Titletest";

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = "Descriptiontest";

    const createImage = document.createElement("img");
    createImage.src = "background.jpg";
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