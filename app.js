const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const colora = document.querySelector('.color');
const color = btn.addEventListener('click', function () {
  const nm = rn();
  document.body.style.backgroundColor = colors[nm];
  colora.textContent = colors[nm];
});
function getNumber() {
  return Math.floor(Math.random() * colors.length);
}
