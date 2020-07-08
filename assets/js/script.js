const selector = document.querySelectorAll('.open-btn, .close-btn')
const selectorBody = document.querySelector('body');
let menuStatus = 0;
selector.forEach(select => select.addEventListener('click', (e) => {
    console.log('click')
    selectorBody.classList.toggle('show');
    const sheet = window.document.styleSheets[0];
    if(menuStatus === 0 ){
        sheet.insertRule('.main-navigation { transition: ease-in-out; transition-duration: 0.8s;}', sheet.cssRules.length);
        menuStatus = 1;
    } else {
        setTimeout(() => {
            sheet.removeRule(sheet.cssRules.length-1);
        }, 1000); 
        menuStatus = 0;
    }
}));