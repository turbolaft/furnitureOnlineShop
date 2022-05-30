# furnitureOnlineShop
This is an example of online shop(on instance of furniture), so it has a funny functional, with a lot of features

**SO, I created a mini-library for my slider, and U can use that, everything is described and U can connect it on your site**

There are a lot of possibilities my slider provides, just visit [slider.js](https://github.com/turbolaft/furnitureOnlineShop/blob/main/src/js/files/slider.js).

*SO if U wanna connect that to your site just copy that code([slider.js](https://github.com/turbolaft/furnitureOnlineShop/blob/main/src/js/files/slider.js)), (I use modules there) and write your values appropriate way*

```js
  /* '.slider-main__body' the second wrapper of our slides, without this one anything won't work out

     '.slider-main__slide' - your slides 

     '.slider-arrow__next' '.slider-arrow__prev' - are the elements of management your slides prev - back; next - next

     '.slider-main__inner' is the first wrapper for your slides which provides flex order

     '.controls-slider-main__dots' is the form for pagination like dots, so '.controls-slider-main__dot' fill that, 

     '.controls-slider-main__dot' is your class for dots, styles to it U can write down through css

     Also '.controls-slider-main__dot--active' is your class for active dot, U can style it as well

     nameOfDataAttribute: 'dotMainSLider', is essential thing for pagination that U can manage slides 
    come up with the name)))
    
    isEndLess - if U wanna make your slides that they don't run out (for instance: from first slider
        to last) mention - true, if not - false

    gap - is the distance between sliders (margin-right) overflow - just experiment that (it can be either thue or false),
    maxWrapperWidth - is the maxwidth for your slide, choose the best))

    upperWrapper - the div upper than '.slider-main__body', look at the html structure,

    For slider which is active now, to that assigns '._active', to be accurate it assigns to slides: '.slider-main__slide',

    '.shifting' is a class with transitions, please assign to that 'transition: all .3s ease 0s;' in CSS

    In slider.js I pointed out where you can change classNames for dots if U want)
    */

    // U have to declare all these properties with the same keys(that is nextSliderBut, slidesField, etc.)
    // Otherwise It won't work out
    const mainSlider = new Slider('.slider-main__body', {
        slides: '.slider-main__slide',
        nextSliderBut: '.slider-arrow__next',
        prevSliderBut: '.slider-arrow__prev',
        slidesField: '.slider-main__inner',
        paginationField: '.controls-slider-main__dots',
        isEndLess: true,
        nameOfDataAttribute: 'dotMainSLider',
        gap: 32,
        overflow: true,
        upperWrapper: '.main-slider__slider',
        maxWrapperWidth: 901,
    });

    mainSlider.render();
```

the structure of html is

```html
<!-- Here is the HTML structure for your slide with all tools-->
                    <div class="main-slider__body">

                        <div class="main-slider__slider slider-main">
                            <div class="slider-main__controls controls-slider-main">
                                <div class="controls-slider-main__dots">
                                    
                                </div>
                                <div class="controls-slider-main__arrows slider-arrows">
                                    <button type="button" class="slider-arrow slider-arrow__prev _icon-arrow-down"></button>
                                    <button type="button" class="slider-arrow slider-arrow__next _icon-arrow-down"></button>
                                </div>
                            </div>

                            <div class="slider-main__body">
                                <div class="slider-main__inner">

                                    <!-- U can change structure inside slider-main__slide-->
                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>

                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>

                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>

                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>

                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>

                                    <div class="slider-main__slide">
                                        <img src="img/main-slider-1.jpg" alt="Image">
    
                                        <a href="" class="slider-main__content">
                                            <div class="slider-main__title">Bohauss</div>
                                            <div class="slider-main__text">Luxury big sofa 2-seat</div>
                                            <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <!-- That's all -->
```
So I think everything will work out))))

