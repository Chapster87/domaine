class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.variantSwatches = this.querySelectorAll('.swatch_d');
    this.cardImages = this.closest('.product-card-wrapper');
    this.variantSelector = this.closest('card-variants');

    this.variantSwatches.forEach((swatch) => {
      swatch.addEventListener('click', this.onSwatchClick.bind(this));
    });
  }

  onSwatchClick(event) {
    const primaryImage = event.target.dataset.img;
    const secondaryImage = event.target.dataset.imgSecondary;

    this.variantSelector.querySelector('.swatch_d.active').classList.remove('active');
    event.target.classList.add('active');

    if (primaryImage) {
      this.cardImages.querySelector('.card-image').src = primaryImage;
    }

    if (secondaryImage) {
      this.cardImages.querySelector('.card-image-secondary').src = secondaryImage;
    }

    // if there is no secondary image, remove the group class to prevent hover effect
    if (!secondaryImage) {
      this.cardImages.querySelector('.card-image-link').classList.remove('group');
    } else {
      this.cardImages.querySelector('.card-image-link').classList.add('group');
    }
  }
}

customElements.define('card-variants', ProductCard);
