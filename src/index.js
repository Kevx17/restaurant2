import "./style.css"
import menu from "./menu.js"
import home from "./home.js";
import contact from "./contact.js";

console.log("NIGA");



document.getElementById("home_btn").onclick = home;
document.getElementById("menu_btn").onclick = menu;
document.getElementById("contact_btn").onclick = contact;

home();
//home();
