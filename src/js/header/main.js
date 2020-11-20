import './refChangeHeader';
import filmService from './apiService';
import articlesTpl from "./templates/articles.hbs";
refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    filmService.query = form.elements.query.value;
    refs.galleryList.innerHTML = '';
    filmService.resetPage();
    updateArticlesMakcup(await filmService.getFilms());
    form.reset();
});
function updateArticlesMakcup(articles) {
    const markup = articlesTpl(articles);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMakcup;
