import "./styles.css";
import { createHome }   from "./home";
import { createContact } from "./contact";
import { MenuModule } from "./menu";

const DOMControl = (() => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    const content = document.getElementById("content");


    function initialHome(){
        resetContent();
        content.appendChild(createHome());
    }

    function resetContent () {
        const content = document.getElementById("content");
        content.innerHTML = "";

    }

    home.addEventListener("click", () => {
        resetContent();
        content.appendChild(createHome());
    });


    menu.addEventListener("click", () => {
        resetContent();
        content.appendChild(MenuModule.createMenu());
    });

    contact.addEventListener("click", () => {
        resetContent();
        content.appendChild(createContact());
    });

    return {initialHome};

})();

DOMControl.initialHome();