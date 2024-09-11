import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/film-list-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmCardView from '../view/film-card-view.js'
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import {render} from '../render.js';

const FILM_COUNT = 5;

export default class FilmsPresenter {
  sortComponent = new SortView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmsListView();
  filmListContainerComponent = new FilmListContainerView();
  //FilmCardComponent = new FilmCardView();
  filmButtomMoreComponent = new FilmButtonMoreView();
  filmDetailsComponent = new FilmDetailsView();

  init = (container) => {
    this.container = container;

    render(this.sortComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render(this.filmListContainerComponent, this.filmListComponent.getElement());

    for (let i = 0; i < FILM_COUNT; i++) {
      render( new FilmCardView(), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtomMoreComponent, this.filmListComponent.getElement());
    render(this.filmDetailsComponent, this.filmListComponent.getElement());
  }; 

}