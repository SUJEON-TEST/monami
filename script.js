
function toggleMenu(){document.getElementById('mobileNav').classList.toggle('show')}
function closeLb(){document.getElementById('lightbox').classList.remove('show')}
function openLb(src){document.getElementById('lbImg').src=src;document.getElementById('lightbox').classList.add('show')}
function copyEmail(){const v=document.getElementById('emailInput').value;navigator.clipboard.writeText(v).then(()=>alert('복사됨: '+v)).catch(()=>prompt('복사',v))}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.faq-item').forEach(it=>{
    it.querySelector('.faq-q').addEventListener('click',()=>{
      const open=it.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
      if(!open) it.classList.add('open');
    });
  });
});
