import dropDown from "./dropDown";
import "../styles/index.css";
import menuIcon from "../images/menu.svg";
import createIconButton from "./createIconButton";

const menuItemsContainer = document.querySelector(".menu-items");
const menuButton = createIconButton(menuIcon);
const myDropDownBtn = dropDown(menuButton, menuItemsContainer);

const myNav = document.querySelector("nav");
myNav.append(myDropDownBtn);
