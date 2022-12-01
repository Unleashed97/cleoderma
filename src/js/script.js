import * as customFunctions from './modules/functions.js'
customFunctions.handleDropdown()
customFunctions.handleFooterAccordion()
customFunctions.handleBurgerMenu()
customFunctions.handleSidebarToggle()
customFunctions.handleQuantity()
customFunctions.handleFormSubmit()
customFunctions.handleRatingSelectable()

import Swiper, { Navigation, Thumbs, FreeMode } from 'swiper'

// vendors
const swiperDiscount = new Swiper('.swiper--discount', {
    modules: [Navigation],
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    spaceBetween: 20,

    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--discount',
        prevEl: '.swiper-button-prev--discount',
    },
})
const swiperLastestProducts = new Swiper('.swiper--latest-products', {
    modules: [Navigation],
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--latest-products',
        prevEl: '.swiper-button-prev--latest-products',
    },
})

const swiperSets = new Swiper('.swiper--sets', {
    modules: [Navigation],
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 5,
    spaceBetween: 20,

    breakpoints: {
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--sets',
        prevEl: '.swiper-button-prev--sets',
    },
})
const swiperFeaturedProducts = new Swiper('.swiper--featured-products', {
    modules: [Navigation],
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--featured-products',
        prevEl: '.swiper-button-prev--featured-products',
    },
})

var swiperGalleryThumbs = new Swiper('.swiper--gallery-thumbs', {
    modules: [Navigation, FreeMode],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next--gallery-thumbs',
        prevEl: '.swiper-button-prev--gallery-thumbs',
    },
})

var swiperGalleryProduct = new Swiper('.swiper--gallery-product', {
    modules: [Thumbs],
    loop: true,
    spaceBetween: 10,

    thumbs: {
        swiper: swiperGalleryThumbs,
    },
})
