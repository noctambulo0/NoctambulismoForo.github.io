const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  
  // Cambia el texto del botón según el tema
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Switch to Light Mode';
  } else {
    themeToggle.textContent = 'Switch to Dark Mode';
  }
});
