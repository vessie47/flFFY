// script.js

// Обработка клика по кнопке «Купить» на index.html:
// Поскольку кнопки «Купить» в вашем примере просто переходили на order.html, 
// здесь мы не перехватываем этот клик. 
// Но если вы захотите показывать alert, вместо перехода, то можно заменить onclick в HTML на класс и вот этот код:

document.addEventListener('DOMContentLoaded', () => {
  // Если вы переделаете кнопку «Купить» в index.html на <button class="buy-btn" data-product="Название">,
  // то этот блок прокатает alert и переход не будет происходить.
  const buyBtns = document.querySelectorAll('.buy-btn');
  buyBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault(); // отменяет стандартный переход
      const product = btn.getAttribute('data-product') || 'товар';
      alert(`Спасибо за выбор: ${product}! Переход к оформлению заказа.`);
      // теперь делаем реальный переход:
      window.location.href = 'order.html';
    });
  });

  // Обработка клика по кнопке «Записаться» на странице classes.html, 
  // если она у вас появится – аналогично можно сделать тоже.
  const enrollBtns = document.querySelectorAll('.enroll-btn');
  enrollBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      const className = btn.getAttribute('data-class') || 'мастер-класс';
      alert(`Вы записались на мастер-класс: ${className}. Мы свяжемся с вами для подтверждения.`);
      // Здесь можно перенаправить, если нужно:
      // window.location.href = 'order.html';
    });
  });

  // Обработка формы «Оформить заказ» (order.html):
  const orderForm = document.querySelector('form');
  if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // В этом месте, вместо реальной отправки на сервер, просто покажем alert:
      alert('Спасибо! Ваш заказ принят. Мы свяжемся с вами для подтверждения.');
      this.reset(); // очищаем форму
    });
  }

  // Плавный скролл «Наверх» (если у вас появится кнопка #scrollTopBtn):
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.onscroll = function() {
      if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    };

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
