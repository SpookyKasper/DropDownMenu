
export default function createIconButton(iconFile) {
  const myButton = document.createElement('button')
  myButton.classList.add('icon-button')
  const myImg = document.createElement('img')
  myImg.src = iconFile
  myButton.append(myImg)

  return myButton
}
