document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-list');
  const items = Array.from(nav.children);
  const submenu = document.querySelector('.submenu-container');

  // تابع تشخیص wrap شدن
  function checkWrap() {
    const firstTop = items[0].offsetTop;
    const wrapped = items.some(li => li.offsetTop > firstTop);
    nav.classList.toggle('wrapped', wrapped);
  }

  checkWrap();
  window.addEventListener('resize', checkWrap);

  // کلیک روی هر آیتم منو
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      // باز/بستن زیرمنو
      if (submenu.classList.contains('open') && submenu.dataset.for === item.dataset.menu) {
        submenu.classList.remove('open');
        submenu.removeAttribute('data-for');
        submenu.innerHTML = '';
      } else {
        submenu.dataset.for = item.dataset.menu;
        submenu.innerHTML = getSubmenuContent(item.dataset.menu);
        submenu.classList.add('open');
      }
    });
  });

  // محتویات زیرمنو
  function getSubmenuContent(key) {
    switch(key) {
      case 'register':
        return `<div class="submenu"><p>فرم ثبت نام دوره‌های آموزشی</p></div>`;
      case 'news':
        return `<div class="submenu"><p>لیست آخرین اخبار</p></div>`;
      case 'directives':
        return `<div class="submenu"><p>بخشنامه‌ها و دستورالعمل‌ها</p></div>`;
      case 'exams':
        return `<div class="submenu"><p>آزمون‌های آنلاین و نتایج</p></div>`;
      case 'records':
        return `<div class="submenu"><p>ثبت سوابق داوطلبان</p></div>`;
      case 'forms':
        return `<div class="submenu"><p>دانلود فرم‌ها و مستندات</p></div>`;
      default:
        return `<div class="submenu"><p>محتوا در دسترس نیست.</p></div>`;
    }
  }
});
