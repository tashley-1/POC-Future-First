const adviceData = {
    retirement: "Start small and stay consistent. Even setting aside $50/month for retirement makes a difference.",
    education: "Consider a 529 plan or speaking to an advisor about education-specific savings tools.",
    protection: "Make sure your assets are insured and consider long-term protection solutions like whole life insurance.",
    legacy: "Think about what you want to leave behind, and explore wills, trusts, or life insurance as options."
  };
  
  document.getElementById('concernForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="concern"]:checked');
    let result = '';
  
    checkboxes.forEach(box => {
      result += `<p><strong>${box.nextSibling.textContent.trim()}:</strong> ${adviceData[box.value]}</p>`;
    });
  
    document.getElementById('advice').innerHTML = result;
  
    if (checkboxes.length > 0) {
      document.getElementById('contactForm').style.display = 'block';
    }
  });
  