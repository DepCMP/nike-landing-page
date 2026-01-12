import { categoryData } from "../data/category.data.js";

export function renderCategory() {
    const categoryCard = document.querySelector('.category__grid');

    categoryCard.innerHTML = categoryData.map(item =>
        `
        <div class="category__item category__${item.position}">
                    <div class="category__banner bg-image"
                        style="background-image: url(${item.image});"></div>
                    <div class="category__overlay"></div>
                    <div class="category__border"></div>
                    <div class="category__txt">${item.title}</div>
                </div>
        `).join("")
};
