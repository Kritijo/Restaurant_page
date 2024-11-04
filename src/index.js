import "./styles.css";
import * as home from "./home.js";
import * as menu from "./menu.js";
import * as about from "./about.js";

home.display();

document.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        switch (e.target.textContent){
            case "Home": home.display(); break;
            case "Menu": menu.display(); break;
            case "About Us": about.display(); break;
            default: home.display();
        }
    }
});