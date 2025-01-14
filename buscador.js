document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const categoryItems = document.querySelectorAll('.category-item');

    function searchCategory() {
        const query = searchInput.value.toLowerCase();
        categoryItems.forEach(function(item) {
            const categoryTitle = item.querySelector('h3').textContent.toLowerCase();
            if (categoryTitle.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', searchCategory);
});