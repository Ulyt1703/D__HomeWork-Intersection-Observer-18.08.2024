let images = document.querySelectorAll("img[data-src]")
let blockLoaders = document.querySelector(".block-loaders")
let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
}
let observeImg = new IntersectionObserver(items => {
    items.forEach(item => {
        if(item.isIntersecting){
            let image = item.target
            setTimeout(function(){
                image.src = image.dataset.src
                blockLoaders.style.display = 'none'
                image.classList.add("visible-img")
            },100)
        }
    })
}, observerOptions)
images.forEach(image => {
    observeImg.observe(image)
})