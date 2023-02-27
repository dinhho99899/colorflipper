const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const colora = document.querySelector('.color');
const randomIndex = function () {
  return Math.floor(Math.random() * hex.length);
};
btn.addEventListener('click', function () {
  let color = '#';
  for (let i = 0; i <= 5; i++) {
    color += hex[randomIndex()];
  }
  document.body.style.backgroundColor = color;
  colora.textContent = color;
  console.log(color);
});
