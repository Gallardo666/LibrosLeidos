document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort-select');
    const bookList = document.querySelector('.book-list');

    sortSelect.addEventListener('change', () => {
        const books = Array.from(bookList.children);
        const sortBy = sortSelect.value;

        books.sort((a, b) => {
            if (sortBy === 'alpha') {
                return a.dataset.title.localeCompare(b.dataset.title);
            } else if (sortBy === 'rating') {
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            }
        });

        books.forEach(book => bookList.appendChild(book));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort-select');
    const bookList = document.querySelector('.book-list');

    sortSelect.addEventListener('change', () => {
        const books = Array.from(bookList.children);
        const sortBy = sortSelect.value;

        books.sort((a, b) => {
            if (sortBy === 'alpha') {
                return a.dataset.title.localeCompare(b.dataset.title);
            } else if (sortBy === 'rating') {
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            }
        });

        books.forEach(book => bookList.appendChild(book));
    });
});
