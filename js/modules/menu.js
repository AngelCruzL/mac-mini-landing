const $buttonMenu = document.getElementById('buttonMenu');
const $mainHeader = document.getElementById('mainHeader');
const $overlay = document.getElementById('mainOverlay');
const activeClass = 'is-active';
const isTablet = matchMedia('(max-width : 734px)');

const toggleMenu = () => $mainHeader.classList.toggle(activeClass);

const closeMenu = () => $mainHeader.classList.remove(activeClass);

document.onscroll = closeMenu;

const closeMenuClickLink = e => {
  if (e.target.tagName === 'A') closeMenu();
};

const closeMenuTypeScape = e => {
  if (e.code === 'Escape') closeMenu();
};

const handleAddEventListener = () => {
  $buttonMenu.addEventListener('click', toggleMenu);
  $overlay.addEventListener('click', closeMenu);
  $mainHeader.addEventListener('click', closeMenuClickLink);
  $mainHeader.addEventListener('keydown', closeMenuTypeScape);
};

const handleRemoveEventListener = () => {
  $buttonMenu.removeEventListener('click', toggleMenu);
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
