import './index.css'


function cookie() {
    const cookieBtn = document.querySelector('.cookie-consent__button')
    cookieBtn.addEventListener('click', handleConsent)

    const checkConsent = () => {
        if(localStorage.getItem('cookie')) {
            const contentCookie = document.querySelector('.cookie-consent')
            contentCookie.classList.add('hide')
        }
    }
    checkConsent()

    function handleConsent() {
        localStorage.setItem('cookie', true.toString())
        checkConsent()
    }
}
cookie()
