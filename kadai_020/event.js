const btn = document.getElementById('btn');
const text = document.getElementById('text');

// When you click on the button
btn.addEventListener('click', () => {
  // Make it say you clicked on it. by changing the text
    text.textContent = 'ボタンをクリックしました';
});