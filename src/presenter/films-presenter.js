import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/film-list-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmCardView from '../view/film-card-view.js'
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import {render} from '../render.js';

export default class FilmsPresenter {
  sortComponent = new SortView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmsListView();
  filmListContainerComponent = new FilmListContainerView();
  filmButtomMoreComponent = new FilmButtonMoreView();

  filmDetailsComponent = new FilmDetailsView();

  init = (container, filmsModel, commentsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.films = [...filmsModel.get()];

    render(this.sortComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render(this.filmListContainerComponent, this.filmListComponent.getElement());

    //console.log(this.films);

    for (let i = 0; i < this.films.length; i++) {
      //console.log(this.films[i]);
      render(new FilmCardView(this.films[i]), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtomMoreComponent, this.filmListComponent.getElement());

    const comments = [...this.commentsModel.get(this.films[0])];

    render(new FilmDetailsView(this.films[0], comments), this.container.parentElement);
  }; 

}