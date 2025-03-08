const hamMenu = document.querySelector('.ham-menu');
const headerBasketIcon = document.querySelector('#header-basket');
const headerBasketIconWhite = document.querySelector('#header-basket-white');
const offScreenMenu = document.querySelector('.off-screen-menu');
const offScreenMenuLinks = document.querySelectorAll('.off-screen-menu-link');
const orderButton = document.querySelector('#order-btn-click');
const contactForm = document.querySelector('.contacts-form');
const modalYourOrder = document.querySelector('.modal-yourorder');
const modalYourOrderClose = document.querySelector('.modal-button-close');
const modalYourOrderForm = document.querySelector('.modal-form');
const modalYourOrderSubmit = document.querySelector('#modal-btn-submit');
const modalThankYou = document.querySelector('#modal-thankyou');
const modalThankYouBtn = document.querySelector('#thankyou-btn');

const toggleHamMenu = () => {
  hamMenu.classList.toggle('active');
};

const toggleOffScreenMenu = () => {
  offScreenMenu.classList.toggle('active');
};

const toggleModalYourOrder = () => {
  modalYourOrder.classList.toggle('is-hidden');
};

const toggleBasketCheckbox = (selectorCheckbox, selectorIcon) => {
  const checkbox = document.querySelector(selectorCheckbox);
  const icon = document.querySelector(selectorIcon);
  checkbox.checked = !checkbox.checked;
  icon.classList.toggle('is-hidden', !checkbox.checked);
};

const toggleModalThankYou = () => {
  modalThankYou.classList.toggle('is-hidden');
};

const enableBodyScroll = () => {
  bodyScrollLock.enableBodyScroll(document.body);
};

const disableBodyScroll = () => {
  bodyScrollLock.disableBodyScroll(document.body);
};

hamMenu.addEventListener('click', () => {
  toggleHamMenu();
  toggleOffScreenMenu();
  if (offScreenMenu.classList.contains('active')) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }
});

offScreenMenuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    toggleHamMenu();
    toggleOffScreenMenu();
    enableBodyScroll();
    history.pushState(null, null, window.location.href.split('#')[0]);
    window.location.hash = targetId;
  });
});

headerBasketIcon.addEventListener('click', () => {
  toggleModalYourOrder();
  disableBodyScroll();
});

headerBasketIconWhite.addEventListener('click', () => {
  toggleModalYourOrder();
  disableBodyScroll();
});

orderButton.addEventListener('click', () => {
  setTimeout(() => {
    toggleModalYourOrder();
    disableBodyScroll();
  }, 500);
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Subscription successful!');
  contactForm.reset();
});

modalYourOrderClose.addEventListener('click', () => {
  toggleModalYourOrder();
  if (!offScreenMenu.classList.contains('active')) {
    enableBodyScroll();
  }
});

modalYourOrder.addEventListener('click', event => {
  if (event.target === modalYourOrder) {
    toggleModalYourOrder();
    if (!offScreenMenu.classList.contains('active')) {
      enableBodyScroll();
    }
  }
});

document.querySelectorAll('.basket').forEach(basket => {
  basket.addEventListener('click', () => {
    const index = basket.dataset.index;
    toggleBasketCheckbox(`.checkbox-input-${index}`, `#checkbox-icon-${index}`);
  });
});

modalYourOrderForm.addEventListener('submit', event => {
  event.preventDefault();
  const checkboxes = document.querySelectorAll(
    '.checkbox-input-first, .checkbox-input-second, .checkbox-input-third',
  );
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  const icons = document.querySelectorAll(
    '#checkbox-icon-first, #checkbox-icon-second, #checkbox-icon-third',
  );
  if (isChecked) {
    toggleModalYourOrder();
    toggleModalThankYou();
    modalYourOrderForm.reset();
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    icons.forEach(icon => icon.classList.add('is-hidden'));
  } else {
    alert('Please select at least one fruit!');
  }
});

modalThankYouBtn.addEventListener('click', () => {
  toggleModalThankYou();
  enableBodyScroll();
});

modalThankYou.addEventListener('click', event => {
  if (event.target === modalThankYou) {
    toggleModalThankYou();
    enableBodyScroll();
  }
});
