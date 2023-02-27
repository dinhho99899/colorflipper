const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const text = document.querySelector('.color');
const randomIndex = function () {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function () {
  const color = colors[randomIndex()];
  document.body.style.backgroundColor = color;
  text.textContent = color;
  console.log(color);
});
