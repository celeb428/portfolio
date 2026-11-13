/**
 * Dark Mode toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  const THEME_KEY = 'caleb-portfolio-theme';
  const darkModeBtn = document.getElementById('dark-mode-btn');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      const moon = darkModeBtn.querySelector('.icon-moon');
      const sun = darkModeBtn.querySelector('.icon-sun');
      if (moon) moon.style.display = 'none';
      if (sun) sun.style.display = 'block';
    } else {
      document.body.classList.remove('light-mode');
      const moon = darkModeBtn.querySelector('.icon-moon');
      const sun = darkModeBtn.querySelector('.icon-sun');
      if (moon) moon.style.display = 'block';
      if (sun) sun.style.display = 'none';
    }
  }

  // Restore saved preference
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
});
