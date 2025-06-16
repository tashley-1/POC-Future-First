const express = require('express');
const path    = require('path');
const app     = express();

const adviceData = {
  retirement: "Start small and stay consistent. Even setting aside $50/month for retirement makes a difference.",
  education:  "Consider a 529 plan or speaking to an advisor about education-specific savings tools.",
  protection: "Make sure your assets are insured and consider long-term protection solutions like whole life insurance.",
  legacy:     "Think about what you want to leave behind, and explore wills, trusts, or life insurance as options."
};

// 1) Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// 2) API endpoint for advice
app.get('/api/advice', (req, res) => {
  res.json(adviceData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
