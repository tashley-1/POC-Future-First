let adviceData = {};

window.addEventListener('DOMContentLoaded', () => {
  fetch('/api/advice')
    .then(response => response.json())
    .then(data => {
      adviceData = data;
      renderAdvice();
    })
    .catch(err => console.error('Error fetching advice:', err));
});

function renderAdvice() {
  const params   = new URLSearchParams(window.location.search);
  const concerns = params.get('concerns')?.split(',') || [];
  const box      = document.getElementById('advice');

  if (!concerns.length) {
    box.innerHTML = '<p>No concerns selected. Please go back and choose one.</p>';
    return;
  }

  box.innerHTML = concerns
    .map(key => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${adviceData[key]}</p>`)
    .join('');
}

