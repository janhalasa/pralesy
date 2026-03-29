const menu = document.getElementById('mobile-menu');
const panel = document.getElementById('menu-panel');
const backdrop = document.getElementById('menu-backdrop');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');

function toggleMenu(isOpen) {
    if (isOpen) {
        menu.classList.remove('hidden');
        // Timeout ensures the transition triggers after the element is visible
        setTimeout(() => {
            panel.classList.replace('-translate-x-full', 'translate-x-0');
            backdrop.classList.replace('opacity-0', 'opacity-100');
        }, 10);
    } else {
        panel.classList.replace('translate-x-0', '-translate-x-full');
        backdrop.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => menu.classList.add('hidden'), 300);
    }
}

openBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
backdrop.addEventListener('click', () => toggleMenu(false));