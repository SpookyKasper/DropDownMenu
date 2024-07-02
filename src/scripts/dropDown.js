import menuIcon from '../images/menu.svg'
import createIconButton from './createIconButton'

export default function dropDown(menuEl) {
  const dropDownBtn = createIconButton(menuIcon)
  dropDownBtn.addEventListener('click', () => menuEl.classList.toggle('visible'))
  return dropDownBtn
}
