import { productData } from "../data/product.data.js";

export function renderProduct() {
    const swiperWrapperProduct = document.querySelector('.product.swiper-wrapper');
    swiperWrapperProduct.innerHTML = productData.map(item =>
        `
        <div class="swiper-slide">
            <div class="product-cart">
                <div class="product__image">
                                <img src="${item.image}" alt="">
                </div>
                <div class="product__info">
                    <h5 class="product__name">${item.name}</h5>
                     <span class="product__price">$${item.price}</span>
                 </div>
             </div>
        </div>
        `
    ).join("");
};
