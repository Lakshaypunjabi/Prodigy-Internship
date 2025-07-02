window.onload = function () {
  alert("Welcome to ECOBITE - Let's reduce food waste together!");
};

const donateBtn = document.querySelector('.button');
donateBtn.addEventListener('mouseenter', () => {
  donateBtn.style.backgroundColor = '#28a745';
  donateBtn.style.color = 'white';
});
donateBtn.addEventListener('mouseleave', () => {
  donateBtn.style.backgroundColor = '';
  donateBtn.style.color = '';
});