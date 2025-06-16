const adviceData = {
  retirement: {
    summary: "Start small and stay consistent. Even setting aside $50/month for retirement makes a difference.",
    details: "A good first step is to open an IRA or 401(k). Aim for at least 10% of your salary over time, and increase contributions with each raise."
  },
  education: {
    summary: "Consider a 529 plan or speaking to an advisor about education-specific savings tools.",
    details: "529 plans grow tax-free when used for qualifying education expenses. Compare state plans and look for low-fee options."
  },
  protection: {
    summary: "Make sure your assets are insured and consider long-term protection solutions like whole life insurance.",
    details: "Whole life builds cash value you can borrow against. Term life offers lower cost for a set period—often best when young."
  },
  legacy: {
    summary: "Think about what you want to leave behind, and explore wills, trusts, or life insurance as options.",
    details: "Trusts can help avoid probate and reduce estate taxes. Even a simple will ensures your wishes are known and legally enforceable."
  }
};

// --- Flow 1: Select → Advice → Contact
document.getElementById('concernForm').addEventListener('submit', e => {
  e.preventDefault();

  const picks = Array.from(document.querySelectorAll('input[name="concern"]:checked'))
                     .map(cb => cb.value);

  if (!picks.length) {
    return alert('Please select at least one concern.');
  }

  const box = document.getElementById('advice');
  box.innerHTML = picks.map(key => {
    const cap = key.charAt(0).toUpperCase() + key.slice(1);
    return `
      <div class="advice-item" data-key="${key}">
        <p><strong>${cap}:</strong> ${adviceData[key].summary}</p>
        <button class="learn-more">Learn More</button>
        <div class="details">${adviceData[key].details}</div>
      </div>
    `;
  }).join('');

  document.getElementById('contactForm').style.display = 'block';

  // Attach Learn-More for Flow 3
  document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      if (details.style.display === 'block') {
        details.style.display = 'none';
        btn.textContent = 'Learn More';
      } else {
        details.style.display = 'block';
        btn.textContent = 'Show Less';
      }
    });
  });
});

// --- Flow 2: Contact → Thank-You
document.getElementById('contactFormElement').addEventListener('submit', e => {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('thankYou').style.display = 'block';
});
