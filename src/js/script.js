import * as customFunctions from './modules/functions.js'

// vendors
const swiperDiscount = new Swiper('.swiper--discount', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next--discount',
        prevEl: '.swiper-button-prev--discount',
    },
})
const swiperLastestProducts = new Swiper('.swiper--latest-products', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next--latest-products',
        prevEl: '.swiper-button-prev--latest-products',
    },
})

const swiperSets = new Swiper('.swiper--sets', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next--sets',
        prevEl: '.swiper-button-prev--sets',
    },
})
const swiperFeaturedProducts = new Swiper('.swiper--featured-products', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next--featured-products',
        prevEl: '.swiper-button-prev--featured-products',
    },
})
