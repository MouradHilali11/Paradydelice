const menu = document.getElementById('menu');
const openBtn = document.getElementById('bars');
const closeBtn = document.getElementById('close');

function openMenu() {
    menu.style.display = 'flex';
    document.addEventListener('click', handleOutsideClick);
}

function closeMenu() {
    menu.style.display = 'none';
    document.removeEventListener('click', handleOutsideClick);
}
function handleOutsideClick(event) {
    if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        closeMenu();
    }
}
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

const links = document.querySelectorAll('.more_links .link');
const productImages = document.querySelectorAll('.more_products .product_img');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Update active class
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Get category from data attribute
    const category = link.dataset.category;

    // Update images
    productImages.forEach((img, index) => {
      img.src = `./assets/images/${category}${index + 1}.jpeg`;
    });
  });
});

