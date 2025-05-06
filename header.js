document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.nav-item');
  const menus = document.querySelectorAll('.mega-menu');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = item.getAttribute('data-target');
      menus.forEach(menu => {
        if (menu.id === target) {
          menu.classList.toggle('active');
        } else {
          menu.classList.remove('active');
        }
      });
    });
  });

  window.addEventListener('click', e => {
    if (!e.target.closest('.nav-item') && !e.target.closest('.mega-menu')) {
      menus.forEach(menu => menu.classList.remove('active'));
    }
  });
});
