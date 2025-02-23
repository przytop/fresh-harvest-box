const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const offScreenMenuLinks = document.querySelectorAll('.off-screen-menu-link');
const contactForm = document.querySelector('.contacts-form');
const modalYourOrder = document.querySelector('.modal-yourorder');
const modalYourOrderClose = document.querySelector('.modal-button-close');
const modalYourOrderForm = document.querySelector('.modal-form');
const modalYourOrderSubmit = document.querySelector('#modal-btn-submit');
const modalThankYou = document.querySelector('#modal-thankyou');
const modalThankYouBtn = document.querySelector('#thankyou-btn');

// HEADER
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  if (offScreenMenu.classList.contains('active')) {
    bodyScrollLock.disableBodyScroll(document.body);
  } else {
    bodyScrollLock.enableBodyScroll(document.body);
  }
});

offScreenMenuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.remove('active');
    bodyScrollLock.enableBodyScroll(document.body);
    history.pushState(null, null, window.location.href.split('#')[0]);
    window.location.hash = targetId;
  });
});

document.querySelector('#header-basket').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(document.body);
});

document.querySelector('#header-basket-white').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(document.body);
});

// FRUITS
document.querySelector('#order-btn-click').addEventListener('click', () => {
  setTimeout(() => {
    modalYourOrder.classList.remove('is-hidden');
    bodyScrollLock.disableBodyScroll(document.body);
  }, 500);
});

// CONTACTS
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Subscription successful!');
  contactForm.reset();
});

// YOUR ORDER
modalYourOrderClose.addEventListener('click', () => {
  modalYourOrder.classList.add('is-hidden');
  if (!offScreenMenu.classList.contains('active')) {
    bodyScrollLock.enableBodyScroll(document.body);
  }
});

modalYourOrder.addEventListener('click', event => {
  if (event.target === modalYourOrder) {
    modalYourOrder.classList.add('is-hidden');
    if (!offScreenMenu.classList.contains('active')) {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }
});

document.querySelector('.basket.first').addEventListener('click', () => {
  const checkbox = document.querySelector('.checkbox-input-first');
  const icon = document.querySelector('#checkbox-icon-one');
  checkbox.checked = !checkbox.checked;
  icon.classList.toggle('is-hidden', !checkbox.checked);
});

document.querySelector('.basket.second').addEventListener('click', () => {
  const checkbox = document.querySelector('.checkbox-input-second');
  const icon = document.querySelector('#checkbox-icon-two');
  checkbox.checked = !checkbox.checked;
  icon.classList.toggle('is-hidden', !checkbox.checked);
});

document.querySelector('.basket.third').addEventListener('click', () => {
  const checkbox = document.querySelector('.checkbox-input-third');
  const icon = document.querySelector('#checkbox-icon-three');
  checkbox.checked = !checkbox.checked;
  icon.classList.toggle('is-hidden', !checkbox.checked);
});

modalYourOrderForm.addEventListener('submit', event => {
  event.preventDefault();

  const checkboxes = document.querySelectorAll(
    '.checkbox-input-first, .checkbox-input-second, .checkbox-input-third',
  );
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  const icons = document.querySelectorAll(
    '#checkbox-icon-one, #checkbox-icon-two, #checkbox-icon-three',
  );

  if (isChecked) {
    modalYourOrder.classList.add('is-hidden');
    modalThankYou.classList.remove('is-hidden');
    modalYourOrderForm.reset();
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    icons.forEach(icon => icon.classList.add('is-hidden'));
  } else {
    alert('Please select at least one fruit!');
  }
});

// THANK YOU
modalThankYouBtn.addEventListener('click', () => {
  modalThankYou.classList.add('is-hidden');
  bodyScrollLock.enableBodyScroll(document.body);
});

modalThankYou.addEventListener('click', event => {
  if (event.target === modalThankYou) {
    modalThankYou.classList.add('is-hidden');
    bodyScrollLock.enableBodyScroll(document.body);
  }
});
