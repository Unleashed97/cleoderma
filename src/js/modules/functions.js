export const handleDropdown = () => {
    const dropdownList = document.querySelectorAll('.dropdown')

    // dropdownBtnList.forEach(btn => btn.addEventListener('click', () => {

    // }))
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
