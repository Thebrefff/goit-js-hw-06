function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bgColor = document.querySelector('body');
const colorName = document.querySelector('.color');
const colorChanger = document.querySelector('.change-color');

colorChanger.addEventListener('click', e => {
  let color = getRandomHexColor();
  colorName.textContent = color;
  bgColor.style.backgroundColor = color;
});
