const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', function () {
    searchInput.focus();
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Buscando: ' + searchInput.value);
    }
});
