export default function initAccordion() {
  const accordionIList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionIList.length) {
    accordionIList[0].classList.add(activeClass);
    accordionIList[0].nextElementSibling.classList.add(activeClass);

    accordionIList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
