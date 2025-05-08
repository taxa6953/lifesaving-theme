const menuItems3 = document.querySelectorAll('.nav-item3');
const menus3     = document.querySelectorAll('.mega-menu3');

// باز و بسته کردن مگا منو با کلیک
menuItems3.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    const target = item.dataset.target;
    menus3.forEach(menu => {
      if (menu.id === target) menu.classList.toggle('active');
      else menu.classList.remove('active');
    });
  });
});

// بستن منو با کلیک خارج از منو یا آیتم‌ها
window.addEventListener('click', e => {
  if (!e.target.closest('.nav-item3') && !e.target.closest('.mega-menu3')) {
    menus3.forEach(menu => menu.classList.remove('active'));
  }
});

// بستن منو هنگام اسکرول صفحه
window.addEventListener('scroll', () => {
  menus3.forEach(menu => menu.classList.remove('active'));
});
