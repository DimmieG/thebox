document.querySelectorAll('.services-grid-block').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });