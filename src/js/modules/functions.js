export const handleDropdown = () => {
    const dropdownList = document.querySelectorAll('.dropdown')

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

export const handleFooterAccordion = () => {
    const colCaptionList = document.querySelectorAll('.footer__col-caption')

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

export const handleBurgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const nav = document.querySelector('.nav--header')
    const navClose = nav.querySelector('.nav-close')

    burgerBtn.addEventListener('click', () => {
        nav.classList.add('active')
    })

    navClose.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

export const handleSidebarToggle = () => {
    const filtersBtnOpen = document.querySelector('.sidebar-filters-open')
    const filtersBtnClose = document.querySelector('.sidebar-filters-close')
    const sidebarFilters = document.querySelector('.sidebar--shop')

    filtersBtnOpen.addEventListener('click', () => {
        sidebarFilters.classList.add('active')
    })

    filtersBtnClose.addEventListener('click', () => {
        sidebarFilters.classList.remove('active')
    })
}
