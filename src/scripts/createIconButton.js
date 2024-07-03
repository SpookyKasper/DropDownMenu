export default function createIconButton(iconFile) {
  const myButton = document.createElement('button')
  const myImg = document.createElement('img')
  myImg.src = iconFile
  myButton.classList.add('icon-button')
  myButton.append(myImg)

  return myButton
}
