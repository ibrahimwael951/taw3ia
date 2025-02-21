

const body = document.body;
const icon = document.getElementById('theme-toggle').querySelector('i');
 

body.classList.add('bg-gray-100', 'text-gray-800')
 

document.getElementById('theme-toggle').addEventListener('click', function() {

     
    
    if (body.classList.contains('bg-gray-100', 'text-gray-800')) {
        body.classList.remove('bg-gray-100', 'text-gray-800');
        body.classList.add('bg-gray-900', 'text-gray-100');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('bg-gray-900', 'text-gray-100');
        body.classList.add('bg-gray-100', 'text-gray-800');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});