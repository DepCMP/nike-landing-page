import { heroData } from "../data/hero.data.js";

export function renderHero() {
    const swiperWrapperhero = document.querySelector(".hero.swiper-wrapper");
    swiperWrapperhero.innerHTML = heroData.map(item => `
        <div class="swiper-slide">
            <div class="hero__bg bg-image"
                            style="background-image: url(${item.bg});">
            </div>
            <div class="container">
                <div class="hero__content">
                    <div class="hero__txt">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <button class="btn">go to collections</button>
                    </div>
                    <div class="hero__img">
                        <img src="${item.image}" alt="product image">
                    </div>
                </div>
            </div> 
        </div> 
        `).join("");

};