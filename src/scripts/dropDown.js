export default function dropDownButton(buttonEl, menuEl) {
  const myBtn = buttonEl
  myBtn.addEventListener('click', () => menuEl.classList.toggle('visible'))
  return myBtn
}
