export const handleDropdown = () => {
    const dropdownList = document.querySelectorAll('.dropdown')

    if (dropdownList) {
        window.addEventListener('click', ({ target }) => {
            const dropdown = target.closest('.dropdown')
            const dropdownContent = target.closest('.dropdown__content')

            const clickedOnClosedDropdown =
                dropdown && !dropdown.classList.contains('active')
            if (!dropdownContent) {
                dropdownList.forEach((d) => {
                    const dropdownBtn = d.querySelector('.dropdown__btn')

                    d.classList.remove('active')
                })
            }

            if (clickedOnClosedDropdown) {
                dropdown.classList.add('active')
                const dropdownBtn = dropdown.querySelector('.dropdown__btn')
            }
        })
    }
}

export const handleFooterAccordion = () => {
    const colCaptionList = document.querySelectorAll('.footer__col-caption')

    if (colCaptionList) {
        colCaptionList.forEach((caption) =>
            caption.addEventListener('click', () => {
                const col = caption.closest('.footer__col')
                if (col.classList.contains('active')) {
                    col.classList.remove('active')
                    caption.classList.remove('active')
                } else {
                    col.classList.add('active')
                    caption.classList.add('active')
                }
            }),
        )
    }
}

export const handleBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const nav = document.querySelector('.nav--header')
    const navClose = nav.querySelector('.nav-close')

    if (burgerBtn && nav && navClose) {
        burgerBtn.addEventListener('click', () => {
            nav.classList.add('active')
        })

        navClose.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    }
}

export const handleSidebarToggle = () => {
    const filtersBtnOpen = document.querySelector('.sidebar-filters-open')
    const filtersBtnClose = document.querySelector('.sidebar-filters-close')
    const sidebarFilters = document.querySelector('.sidebar--shop')

    if (filtersBtnOpen && filtersBtnClose && sidebarFilters) {
        filtersBtnOpen.addEventListener('click', () => {
            sidebarFilters.classList.add('active')
        })

        filtersBtnClose.addEventListener('click', () => {
            sidebarFilters.classList.remove('active')
        })
    }
}

export const handleQuantity = () => {
    const quantityBtnAdd = document.querySelector('.quantity__btn--add')
    const quantityBtnRemove = document.querySelector('.quantity__btn--remove')
    const quantityValue = document.querySelector('.quantity__value')

    if (quantityBtnAdd && quantityBtnRemove && quantityValue) {
        quantityBtnAdd.addEventListener('click', () => {
            quantityValue.value = Number(quantityValue.value) + 1
        })
        quantityBtnRemove.addEventListener('click', () => {
            quantityValue.value =
                Number(quantityValue.value) <= 1
                    ? 1
                    : Number(quantityValue.value) - 1
        })
    }
}

export const handleFormSubmit = () => {
    const formList = document.querySelectorAll('.form')

    if (formList) {
        formList.forEach((form) =>
            form.addEventListener('submit', (e) => {
                e.preventDefault()
            }),
        )
    }
}

export const handleRatingSelectable = () => {
    const ratingSelectable = document.querySelector('.star-rating--selectable')

    if (ratingSelectable) {
        const starList = ratingSelectable.querySelectorAll('.fa-star')

        starList.forEach((star, index) =>
            star.addEventListener('mouseover', () => {
                starList.forEach((star) =>
                    star.classList.remove('rating-color'),
                )
                const hoverStarsList = Array.from(starList).splice(0, index + 1)

                console.log(hoverStarsList)

                hoverStarsList.forEach((hoveredStar) =>
                    hoveredStar.classList.add('rating-color'),
                )
            }),
        )
    }
}

export const handleShopLayout = () => {
    const gridBtn = document.querySelector('.shop__controls-btn.grid')
    const listBtn = document.querySelector('.shop__controls-btn.list')

    if (gridBtn && listBtn) {
        const cardWrapperList = document.querySelectorAll(
            '.card-product-wrapper',
        )
        gridBtn.addEventListener('click', () => {
            listBtn.classList.remove('active')

            gridBtn.classList.add('active')
            cardWrapperList.forEach((cardWrapper) => {
                cardWrapper.classList.remove('col-12')
                cardWrapper.classList.add('col-6', 'col-sm-4', 'col-xl-3')
            })
        })
        listBtn.addEventListener('click', () => {
            gridBtn.classList.remove('active')

            listBtn.classList.add('active')
            cardWrapperList.forEach((cardWrapper) => {
                cardWrapper.classList.remove('col-6', 'col-sm-4', 'col-xl-3')
                cardWrapper.classList.add('col-12')
            })
        })
    }
}
