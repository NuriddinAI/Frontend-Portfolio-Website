window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY>0)
    })
    const menyuBtn = this.document.querySelector('.menyu-btn')
    const navigation = this.document.querySelector('.navigation')
    const navigationItems = this.document.querySelectorAll('.navigation a')

    menyuBtn.addEventListener('click', () => {
        menyuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', ()=> {
            menyuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const scrollBtn = this.document.querySelector('.scrollToTop-btn')
    this.window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY  > 500)
    })
    scrollBtn.addEventListener('click', () => {
        this.document.body.scrollTop = 0;
        this.document.documentElement.scrollTop = 0;
    })

    this.window.addEventListener('scroll', () => {
        let reveals = this.document.querySelectorAll('.reveal')

        for(let i=0; i<reveals.length; i++){
            let windowHeight = this.window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
        }

    })
})



