const select = document.getElementById('reason');

select.addEventListener('change', () => {
  if (select.value) {
    select.classList.add('valid');
  } else {
    select.classList.remove('valid');
  }
});