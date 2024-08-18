let images = document.querySelectorAll("img[data-src]")
let blockLoaders = document.querySelector(".block-loaders")
let viewButton = document.querySelector(".view-button")

/* Create an object for the parameters regarding the display of images. */
let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
}

/* Setting a new change for the IntersectionObserver class */
let observeImg = new IntersectionObserver(items => {
    /* Through the counter using the forEach method - 
    I write a condition so that it works for all three 
    images in the block. */
    items.forEach(item => {
        viewButton.addEventListener("click", function(){
            let image = item.target
            /* I set the sex function setTimeout for a delay of 100 ms */
            setTimeout(function(){
                /* Setting a real link to the image via data-src like dataset.src */
                image.src = image.dataset.src
                blockLoaders.style.display = 'none'
                image.classList.add("visible-img")
            },100)
        })
    })
    /* I insert the observerOptions change to
     make the parameters for the images work, ... */
}, observerOptions)
images.forEach(image => {
    observeImg.observe(image)
})