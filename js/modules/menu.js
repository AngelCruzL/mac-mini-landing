const $menuButton = document.getElementById('menu-button');
const $mainHeader = document.getElementById('main-header');
const $overlay = document.getElementById('main-overlay');
const activeClass = 'is-active';
const isTablet = matchMedia('(max-width : 734px)');

const toggleMenu = () => $mainHeader.classList.toggle(activeClass);

const closeMenu = () => $mainHeader.classList.remove(activeClass);

const closeMenuClickLink = e => {
  if (e.target.tagName === 'A') closeMenu();
};

const closeMenuTypeScape = e => {
  if (e.code === 'Escape') closeMenu();
};

const handleAddEventListener = () => {
  $menuButton.addEventListener('click', toggleMenu);
  $overlay.addEventListener('click', closeMenu);
  $mainHeader.addEventListener('click', closeMenuClickLink);
  $mainHeader.addEventListener('keydown', closeMenuTypeScape);
};

const handleRemoveEventListener = () => {
  $menuButton.removeEventListener('click', toggleMenu);
  $overlay.removeEventListener('click', closeMenu);
  $mainHeader.removeEventListener('click', closeMenuClickLink);
  $mainHeader.removeEventListener('keydown', closeMenuTypeScape);
};

const handleEventListener = mediaQuery => {
  if (mediaQuery.matches) handleAddEventListener();
  else handleRemoveEventListener();
};

export const handleActiveMenu = () => {
  if (isTablet.matches) handleAddEventListener();

  isTablet.addEventListener('change', handleEventListener);
};
