const menuButton = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.mobile-nav')

menuButton.addEventListener('click', showNav)

let isOpen = false
function showNav() {
  if (!isOpen) {
    navMenu.style.scale = 1
  }
  if (isOpen) {
    navMenu.style.scale = 0
  }
  isOpen = !isOpen
}
