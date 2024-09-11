import {createElement} from '../render.js';

const createFooterStatisticsTemplate = () => '<p>0 movies inside</p>';

export default class FooterStatisticsView {
  getTemplate() {
    return createFooterStatisticsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}