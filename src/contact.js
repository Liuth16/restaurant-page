function createContact () {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const divTitle = document.createElement("div");
    divTitle.classList.add("contact-title");
    divTitle.innerHTML = `
    <p>Contact Information</p>
    `;

    const divInfo = document.createElement("div");
    divInfo.classList.add("contact-info");
    divInfo.innerHTML = `
    <p>Email: latorre@notfakeemail.com</p>
    <p>Phone: 123-456-789</p>
    <p>Address: Street of Dreams, 123</p>
    `;

    contactContainer.appendChild(divTitle);
    contactContainer.appendChild(divInfo);

    return contactContainer;
}