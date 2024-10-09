// assets/js/main.js

// Sample day codes (replace these with actual codes for each day)
const codes = {
  1: 1887,
  2: 5638,
  3: 6465,
  4: 6259,
  5: 7075,
  6: 4283,
  7: 8299,
  8: 6929,
  9: 2003,
  10: 1396,
  11: 4609,
  12: 9177,
  13: 5267,
  14: 2416,
  15: 2260,
  16: 3795,
  17: 5204,
  18: 3405,
  19: 4506,
  20: 2655,
  21: 6553,
  22: 5353,
  23: 4848,
  24: 7804,
};

// Function to check the entered code and redirect
function checkCode() {
  const input = document.getElementById("codeInput").value.trim();

  if (Object.values(codes).includes(Number(input))) {
    // If code matches, redirect to the corresponding day page
    window.location.href = `day.html?code=${input}`;
  } else {
    // If invalid code, show an alert
    alert("Code invalide 🤓");
  }
}

function getCodeKey(code) {
  return Object.keys(codes).find((key) => codes[key] === Number(code));
}
