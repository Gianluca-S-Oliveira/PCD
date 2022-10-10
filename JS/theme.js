function Btn(){
    const btn = document.querySelector('.js-theme')
    const themes ={
        't-dark':'t-light',
        't-light':'t-dark',
    }
    const currentTheme = document.body.dataset.theme
  document.body.setAttribute('data-theme',themes[currentTheme] || 't-light')
}
