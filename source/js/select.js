const select = document.querySelector('.select');
const selectInput = document.querySelector('.select__input');
const selectList = document.querySelector('.select__list')

selectInput.addEventListener('click', () => {
  select.classList.toggle('select--open')
})

selectList.addEventListener('click', (e) => {
  if (e.target.classList.contains('select__item')) {
    selectInput.value = e.target.textContent;
    select.classList.toggle('select--open')
  }
})
