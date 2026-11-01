import { katalogFilmow, postacieSF, nadchodzacePremiery } from './dane.js';

document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalog-grid');
    const charactersGrid = document.getElementById('characters-grid');
    const premieresGrid = document.getElementById('premiere-grid') || document.getElementById('premieres-grid');

    function renderMovies(items, container) {
        if (!container) return;
        container.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <div class="movie-poster-wrap">
                    <img src="${item.zdjecie || '../zdjecia/placeholder.jpg'}" alt="${item.tytul || item.imie}">
                </div>
                <div class="movie-info">
                    <span class="tag">${item.kategoria || item.zrodlo || item.data}</span>
                    <h3>${item.tytul || item.imie}</h3>
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
});