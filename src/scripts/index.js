import dropDown from './dropDown'
import '../styles/index.css'

const myItemsMenu = document.querySelector('.menu-items')
const myDropDownBtn = dropDown(myItemsMenu)

const myNav = document.querySelector('nav')
myNav.append(myDropDownBtn)

