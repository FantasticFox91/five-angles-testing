const cards = document.querySelectorAll('.selected-items__item');
const totalPrice = document.querySelector('.totals__price');

cards.forEach((el) => el.addEventListener('click', (e) => {
  const numberInput = el.querySelector('.counter__input');
  const price = el.querySelector('.selected-items__num');
  if (e.target.classList.contains('counter__button--plus')) {
    numberInput.value = +numberInput.value + 1;
    price.textContent = `${numberInput.value * price.dataset.price}`
    let sum = 0;
    document.querySelectorAll('.selected-items__num').forEach((el) => sum += Number(el.textContent))
    totalPrice.textContent = sum;
  }
  if (e.target.classList.contains('counter__button--minus') && numberInput.value > 1) {
    numberInput.value = +numberInput.value - 1;
    price.textContent = `${numberInput.value * price.dataset.price}`
    let sum = 0;
    document.querySelectorAll('.selected-items__num').forEach((el) => sum += Number(el.textContent))
    totalPrice.textContent = sum;
  }
}))
