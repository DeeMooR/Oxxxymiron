// открытие меню бублика

const menu = document.getElementById('menu-toggle-nav');
menu.addEventListener('click', function() {
	const box = document.querySelector('.menu-box');
	box.style.visibility = (box.style.visibility == 'visible') ? 'hidden' : 'visible';
})

// закрытие меню бублика после нажатия на строки меню

const items = document.querySelectorAll('.menu-item');
items.forEach(el => el.addEventListener('click', function() {
	document.querySelector('.menu-box').style.visibility = 'hidden';
	document.getElementById('menu-toggle-nav').checked = false;
}))

