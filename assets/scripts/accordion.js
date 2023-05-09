const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  const button = accordion.querySelector('.accordion__button')
  const content = accordion.querySelector('.accordion__content')

  button.addEventListener('click', () => {
    content.classList.toggle('accordion__content--active')

    accordions.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        const otherContent = otherAccordion.querySelector('.accordion__content')
        otherContent.classList.remove('accordion__content--active')
      }
    })
  })
})
