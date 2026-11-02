import { katalogFilmow as domyslnyKatalog, postacieSF, nadchodzacePremiery } from './dane.js';

document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalog-grid');
    const charactersGrid = document.getElementById('characters-grid');
    const premieresGrid = document.getElementById('premiere-grid') || document.getElementById('premieres-grid');

    let katalogFilmow = JSON.parse(localStorage.getItem('katalogFilmow')) || [...domyslnyKatalog];
    
    //WYSWIETLANIE KART FILMÓW
    function renderMovies(items, container) {
        if (!container) return;
        container.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <div class="movie-poster-wrap">
                    <img src="${item.zdjecie || 'zdjecia/placeholder.jpg'}" alt="${item.tytul || item.imie}">
                </div>
                <div class="movie-info">
                    <span class="tag">${item.kategoria || item.zrodlo || item.data}</span>
                    <h3>${item.tytul || item.imie} ${item.rok ? `<span style="color: var(--muted-text); font-weight: normal; font-size: 0.9rem;">(${item.rok})</span>` : ''}</h3>
                    <p style="color: var(--gold-color); font-size: 0.9rem; margin-bottom: 0.4rem;">${item.ocena || ''}</p>
                    <p style="font-size: 0.85rem; color: var(--muted-text);">${item.opis}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderMovies(katalogFilmow, catalogGrid);
    renderMovies(postacieSF, charactersGrid);
    renderMovies(nadchodzacePremiery, premieresGrid);

    //FILTRY I WYSZUKIWARKA
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');

    let currentFilter = 'all';
    let searchQuery = '';

    function filterAndSearchData() {
        let filtered = katalogFilmow.filter(movie => {
            const matchesCategory = currentFilter === 'all' || movie.kategoria === currentFilter;
            const matchesSearch = movie.tytul.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        renderMovies(filtered, catalogGrid);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterAndSearchData();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndSearchData();
        });
    }

    //FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    //MODAL
    const modal = document.getElementById('movieModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const submissionForm = document.getElementById('movieSubmissionForm');
    const modalMessage = document.getElementById('modal-message');

    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', () => modal.classList.add('show'));
    }
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => modal.classList.remove('show'));
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    if (submissionForm) {
        submissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('modal-title');
            const genreSelect = document.getElementById('modal-genre');
            const yearInput = document.getElementById('modal-year');
            
            if (titleInput && genreSelect && yearInput) {
                const newTitle = titleInput.value.trim();
                const newGenre = genreSelect.value;
                const newYear = yearInput.value.trim();
                
                const yearRegex = /^\d{4}$/;
                if (!yearRegex.test(newYear)) {
                    if (modalMessage) {
                        modalMessage.textContent = "Błąd: Rok produkcji musi składać się z 4 cyfr (np. 2026)!";
                        modalMessage.style.color = "#ef4444";
                    }
                    return;
                }

                const newMovie = {
                    id: katalogFilmow.length + 1,
                    tytul: newTitle,
                    kategoria: newGenre,
                    rok: newYear,
                    ocena: "Nowość (Zgłoszone)",
                    opis: "Film dodany przez użytkownika poprzez formularz w archiwum.",
                    zdjecie: "zdjecia/default.jpg"
                };

                katalogFilmow.push(newMovie);
                localStorage.setItem('katalogFilmow', JSON.stringify(katalogFilmow));

                filterAndSearchData();
                submissionForm.reset();
                if (modalMessage) {
                    modalMessage.textContent = "Dziękujemy! Film został pomyślnie dodany do bazy.";
                    modalMessage.style.color = "var(--gold-color)";
                }
                setTimeout(() => {
                    modal.classList.remove('show');
                    if (modalMessage) modalMessage.textContent = "";
                }, 1500);
            }
        });
    }

    // OBSŁUGA NEWSLETTERA
    const newsletterForm = document.getElementById('newsletter-form');
    const formMessage = document.getElementById('form-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email-input');
            if (emailInput && emailInput.value) {
                if (formMessage) {
                    formMessage.textContent = "Sukces! Twój adres e-mail został zapisany do bazy Nadprzestrzeni.";
                    formMessage.style.color = "var(--accent-color)";
                }
                newsletterForm.reset();
                setTimeout(() => {
                    if (formMessage) formMessage.textContent = "";
                }, 4000);
            }
        });
    }

    //PRZEŁĄCZNIK MOTYWU
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            themeToggleBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌘';
        });
    }

    //POWRÓT NA GÓRĘ STRONY
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});