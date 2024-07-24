const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
  // Set the timer  
  setTimeout(() => {
        const text = document.getElementById('text');
      // After 2 Seconds change the text to ()
        text.textContent = 'ボタンをクリックしました';
    },2000);
});
