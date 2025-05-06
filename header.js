document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.title-list li');
  const display = document.querySelector('.content-display');
  const separator = document.querySelector('.separator');

  function closeAll() {
    titles.forEach(li => li.classList.remove('active'));
    display.classList.remove('open');
    display.innerHTML = '';
  }

  titles.forEach(li => {
    li.addEventListener('click', () => {
      const key = li.dataset.key;

      // اگر همین آیتم باز است، ببند
      if (li.classList.contains('active')) {
        closeAll();
        return;
      }

      // بستن قبلی و باز کردن جدید
      closeAll();
      li.classList.add('active');
      separator.style.display = 'block';

      // پر کردن محتوا بر اساس key (اینجا مثال ساده)
      let html = '';
      switch (key) {
        case 'item1':
          html = '<p>محتوای مربوط به عنوان یک</p>';
          break;
        case 'item2':
          html = '<p>محتوای مربوط به عنوان دو</p>';
          break;
        case 'item3':
          html = '<p>محتوای مربوط به عنوان سه</p>';
          break;
      }
      display.innerHTML = html;
      display.classList.add('open');
    });
  });
});
