document.getElementById('concernForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = Array.from(
    document.querySelectorAll('input[name="concern"]:checked')
  ).map(cb => cb.value);

  if (selected.length === 0) {
    alert('Please select at least one concern.');
    return;
  }

  const params = new URLSearchParams({ concerns: selected.join(',') });
  window.location.href = `advice.html?${params}`;
});

