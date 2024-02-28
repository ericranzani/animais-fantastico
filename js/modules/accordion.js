export default class Accordion {
  constructor(list) {
    this.accordionIList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionIList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionIList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionIList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
