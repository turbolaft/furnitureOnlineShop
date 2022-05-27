import * as flsFunctions from "./modules/functions.js";
import { DropDawnMenu } from "./files/script.js";
import { spollers } from "./files/spollers.js";
import { Slider } from "./files/slider.js";



flsFunctions.isWebp();

spollers();
DropDawnMenu();


document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-main__slide'),
        slider = document.querySelector('.slider-main'),
        nextSliderBut = slider.querySelector('.slider-arrow__next'),
        prevSliderBut = slider.querySelector('.slider-arrow__prev'),
        slidesWrapper = slider.querySelector('.slider-main__body'),
        slidesField = slider.querySelector('.slider-main__inner'),
        paginationField = slider.querySelector('.controls-slider-main__dots');

    // sliderFunc(sliders, slider, nextSliderBut, prevSliderBut, slidesWrapper, slidesField, paginationField, 'dotMainSLider');

    let i = 0;

    nextSliderBut.addEventListener('click', {handleEvent: someFunc, a: 1, b: 2});

    function someFunc() {
        if (i !== 2) {
            i++;
            console.log(`We get two numbers first - ${this.a}, second - ${this.b}`);
            nextSliderBut.removeEventListener('click', {handleEvent: someFunc, a: 1, b: 2});
        } else {
            console.log('Ezzzz');
        }
    }

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

});