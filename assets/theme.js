const htmlEl   = document.documentElement;
const toggleBtn= document.getElementById('themeToggle');
const icon     = document.getElementById('themeIcon');
const label    = document.getElementById('themeLabel');

function setTheme(mode){
  htmlEl.setAttribute('data-bs-theme',mode);
  if(mode==='dark'){
    icon.classList.replace('bi-moon-fill','bi-sun-fill');
    label.textContent='Light';
  }else{
    icon.classList.replace('bi-sun-fill','bi-moon-fill');
    label.textContent='Dark';
  }
}

// 初期読み込み
setTheme(localStorage.getItem('theme')||'light');

// ボタン
toggleBtn.addEventListener('click',()=>{
  const newMode = htmlEl.getAttribute('data-bs-theme')==='dark'?'light':'dark';
  setTheme(newMode);
  localStorage.setItem('theme',newMode);
});

// フッター西暦
// document.getElementById('year')?.textContent = new Date().getFullYear();
