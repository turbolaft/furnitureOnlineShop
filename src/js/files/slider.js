export class Slider {
    constructor(wrapper, {
        slides, nextSliderBut, prevSliderBut, slidesField, paginationField, isEndLess, nameOfDataAttribute,
        gap, overflow, upperWrapper, maxWrapperWidth
    }) 
    {
        this.wrapper = document.querySelector(wrapper) || false;
        this.slides = this.wrapper.querySelectorAll(slides);
        this.nextSliderBut = document.querySelector(nextSliderBut);
        this.prevSliderBut = document.querySelector(prevSliderBut);
        this.slidesField = this.wrapper.querySelector(slidesField);
        this.paginationField = paginationField ? document.querySelector(paginationField) : false;
        this.isEndLess = isEndLess || false;
        this.nameOfDataAttribute = nameOfDataAttribute || false;
        this.gap = gap || false;
        this.overflow = overflow ? 'visible' : 'hidden';
        this.upperWrapper = upperWrapper ? document.querySelector(upperWrapper) : this.wrapper.parentNode;
        this.maxWrapperWidth = maxWrapperWidth || 500;
    }

    render() {

        if (this.wrapper) {

            const firstSlide = this.slides[0],
                lastSlide = this.slides[this.slides.length - 1];

            this.upperWrapper.style.cssText = `
                max-width: ${this.maxWrapperWidth}px;
            `;

            let indexOfSLide = 0,
                allowShift = true,
                allowSwitch = true,
                posInit = 0,
                posX1 = 0,
                posX2 = 0,
                firstClone,
                lastClone,
                widthOfMainSlide = window.getComputedStyle(this.wrapper).width,
                indicatorArr = [];

            this.wrapper.style.cssText = `
                position: relative;
                overflow: ${this.overflow};
                width: 100%;
            `;

            this.slidesField.style.cssText = `
                display: flex;
                position: relative;
                top: 0;
            `;

            if (this.isEndLess) {
                firstClone = firstSlide.cloneNode(true);
                lastClone = lastSlide.cloneNode(true);
                
                //! configured for my project firstCLoneLink
                const lastCLoneLink = lastClone.querySelector('.slider-main__content'),
                    firstCLoneLink = firstClone.querySelector('.slider-main__content');

                firstClone.removeChild(firstCLoneLink);
                lastClone.removeChild(lastCLoneLink);
                //! do not copy firstCLoneLink, lastCLoneLink are only for my project

                this.slidesField.append(firstClone);
                this.slidesField.insertBefore(lastClone, firstSlide);
            }


            const changeToNumber = item => {
                const changeStr = item.toString(),
                    cutStr = +changeStr.substring(0, 3);

                return cutStr;
            };

            const changeSliderToRealPositions = (property, index) => {
                this.slidesField.style.left = property + 'px';
                indexOfSLide = index;
            };

            const activeSlider = index => {
                this.slides.forEach(item => item.classList.remove('_active'));

                if (this.isEndLess) {
                    firstClone.classList.remove('_active');
                    lastClone.classList.remove('_active');
                }

                if (index === this.slides.length && this.isEndLess) {
                    firstClone.classList.add('_active');
                } else if (index === -1 && this.isEndLess) {
                    lastClone.classList.add('_active');
                } else  {
                    this.slides[index].classList.add('_active');
                }
            };

            const checkIndex = () => {
                this.slidesField.classList.remove('shifting');
                this.slides.forEach(item => item.classList.remove('shifting'));

                if (indexOfSLide == -1 && this.isEndLess) {

                    if (window.innerWidth < 1282) {
                        changeSliderToRealPositions(-(this.slides.length * changeToNumber(widthOfMainSlide)) - 
                        (this.gap ? this.gap * this.slides.length : 0), this.slides.length - 1);
                    }

                    lastClone.addEventListener('transitionend', () => {
                        changeSliderToRealPositions(-(this.slides.length * changeToNumber(widthOfMainSlide)) - 
                        (this.gap ? this.gap * this.slides.length : 0), this.slides.length - 1);
                    });    

                } else if (indexOfSLide == this.slides.length && this.isEndLess) {

                    if (window.innerWidth < 1282) {
                        changeSliderToRealPositions(-(1 * changeToNumber(widthOfMainSlide)) - 
                        (this.gap ? this.gap : 0), 0);
                    }
                    
                    firstClone.addEventListener('transitionend', () => {
                        changeSliderToRealPositions(-(1 * changeToNumber(widthOfMainSlide)) - 
                        (this.gap ? this.gap : 0), 0);
                    });

                } else if (indexOfSLide === 0 && this.isEndLess) {

                    this.slidesField.style.left = -(1 * changeToNumber(widthOfMainSlide)) - 
                    (this.gap ? this.gap : 0) + 'px';

                } else if (indexOfSLide === 0 && !this.isEndLess) {
                    this.slidesField.style.left = 0;
                } 
                allowShift = true;
                activeSlider(indexOfSLide);
            };

            const showIndexDot = index => {
                if (allowShift && this.nameOfDataAttribute && this.paginationField) {
                    indicatorArr.forEach(item => {
                        const slideIndex = item.getAttribute(`data-${this.nameOfDataAttribute}`);

                        // Here U can change className for your active dot 
                        item.classList.remove('controls-slider-main__dot--active');
                
                        if (slideIndex == index + 1) {
                            indicatorArr[index].classList.add('controls-slider-main__dot--active');
                        }
                    });
                }
            };

            const pointOutWidthSlideOptions = width => {
                this.slides.forEach(slide => {
                    slide.style.cssText = `
                        width: ${width};
                        margin-right: ${this.gap ? this.gap : 0}px;
                    `;
                });

                if (this.isEndLess) {
                    lastClone.style.cssText = `
                        margin-right: ${this.gap ? this.gap : 0}px;
                    `;

                    firstClone.style.width = width;
                    lastClone.style.width = width;
                }

                
                this.slidesField.style.width = changeToNumber(width) * (this.slides.length + 2) + 
                ((this.gap ? this.gap : 1) * (this.slides.length + 1)) + 'px';
                
                
                indexOfSLide = 0;
                checkIndex();
                showIndexDot(indexOfSLide);
                activeSlider(indexOfSLide);
            };


            pointOutWidthSlideOptions(widthOfMainSlide);
            activeSlider(indexOfSLide);

            window.addEventListener('resize', () => {
                widthOfMainSlide = window.getComputedStyle(this.wrapper).width;

                pointOutWidthSlideOptions(widthOfMainSlide);
            });

            if (this.paginationField && this.nameOfDataAttribute) {
                for (let i = 0; i < this.slides.length; i++) {
                    const dot = document.createElement('span');

                    dot.setAttribute(`data-${this.nameOfDataAttribute}`, i + 1);

                    // Here U can change className for your dots
                    dot.classList.add('controls-slider-main__dot');


                    indicatorArr.push(dot);
                    this.paginationField.append(dot);
                }

                showIndexDot(indexOfSLide);
            }

            const changeSliderPosition = direction => {
                this.slidesField.classList.add('shifting');
                //! For my project
                document.querySelectorAll('.slider-main__content').forEach(item => item.classList.add('shifting'));
                //! document.querySelectorAll('.slider-main__content') is from my layout
                this.slides.forEach(item => item.classList.add('shifting'));

                if (this.isEndLess) {
                    firstClone.classList.add('shifting');
                    lastClone.classList.add('shifting');
                }
                
                const posInitial = this.slidesField.offsetLeft;


                if (allowSwitch && allowShift) {

                    if (direction == -1) {
                        
                        this.slidesField.style.left = ((posInitial + changeToNumber(widthOfMainSlide)) + (this.gap ? this.gap : 0)) + 'px';
                        indexOfSLide--;              

                    } else if (direction == 1) {

                        this.slidesField.style.left = ((posInitial - changeToNumber(widthOfMainSlide)) - (this.gap ? this.gap : 0)) + 'px';
                        indexOfSLide++;

                    } 


                } else if (allowShift) {
                    if (direction == -1) {
                        this.slidesField.style.left = (originalOffsetLeft + changeToNumber(widthOfMainSlide) + (this.gap ? this.gap : 0)) + 'px';
                        indexOfSLide--;
                    } else if (direction == 1) {
                        this.slidesField.style.left = (originalOffsetLeft - changeToNumber(widthOfMainSlide) - (this.gap ? this.gap : 0)) + 'px';
                        indexOfSLide++;
                    }
                        
                }


                if (indexOfSLide == this.slides.length && this.isEndLess) {
                    showIndexDot(0);
                    activeSlider(this.slides.length);
                } else if (indexOfSLide == -1 && this.isEndLess) {
                    showIndexDot(this.slides.length - 1);
                    activeSlider(-1);
                } else {
                    showIndexDot(indexOfSLide);
                    activeSlider(indexOfSLide);
                }

                allowShift = false;
            };


            this.nextSliderBut.addEventListener('click', () => {
                if (!this.isEndLess && indexOfSLide != this.slides.length - 1) {
                    changeSliderPosition(1);
                } else if (this.isEndLess) {
                    changeSliderPosition(1);
                }
            });
            this.prevSliderBut.addEventListener('click', () => {
                if (!this.isEndLess && indexOfSLide != 0) {
                    changeSliderPosition(-1);
                } else if (this.isEndLess) {
                    changeSliderPosition(-1);
                }
            });

            this.slidesField.addEventListener('transitionend', checkIndex);
            this.slidesField.addEventListener('transitionend', () => {
                    allowSwitch = true;
            });

            let originalOffsetLeft;

            const mouseLeave = () => {
                this.slidesField.classList.add('shifting');
                this.slidesField.style.left = (originalOffsetLeft) + 'px';
                allowSwitch = true;

                this.slidesField.removeEventListener('touchmove', swipeAction);
                this.slidesField.removeEventListener('touchend', swipeEnd);
                this.slidesField.removeEventListener('mousemove', swipeAction);
                this.slidesField.removeEventListener('mouseup', swipeEnd);
            };

            const swipeAction = () => {
                let evt = getEvent();

                if (!this.isEndLess && indexOfSLide == 0 && evt.clientX >= posX1) {
                    console.log('Noooop');
                } else if (!this.isEndLess && indexOfSLide == (this.slides.length - 1) && evt.clientX <= posX1) {
                    console.log('Noooop');
                } else {
                    posX2 = posX1 - evt.clientX;

                    posX1 = evt.clientX;
            
                    this.slidesField.style.left = (this.slidesField.offsetLeft - posX2) + 'px';
                }
            };

            const swipeEnd = () => {
                const posFinal = posInit - posX1;
            
                this.slidesField.removeEventListener('touchmove', swipeAction);
                this.slidesField.removeEventListener('touchend', swipeEnd);
                this.slidesField.removeEventListener('mousemove', swipeAction);
                this.slidesField.removeEventListener('mouseup', swipeEnd);
            
                if (Math.abs(posFinal) >= changeToNumber(widthOfMainSlide) / 2) {
            
                    this.wrapper.removeEventListener('mouseleave', mouseLeave);
                    return posInit > posX1 ? changeSliderPosition(1) : changeSliderPosition(-1);
            
                } else {
                    this.slidesField.classList.add('shifting');
                    this.slidesField.style.left = (originalOffsetLeft) + 'px';
                    allowSwitch = true;
            
                    this.wrapper.removeEventListener('mouseleave', mouseLeave);
            
                    return;
                }
            };

            const swipeStart = () => {
                
                if (allowSwitch) {
                    
                    let evt = getEvent();

                    if (evt.type === 'mousedown') {
                        evt.preventDefault();
                    }

                    posInit = posX1 = evt.clientX;

                    originalOffsetLeft = this.slidesField.offsetLeft;

                    this.slidesField.classList.remove('shifting');

                    this.slidesField.addEventListener('touchmove', swipeAction);
                    this.slidesField.addEventListener('touchend', swipeEnd);
                    this.slidesField.addEventListener('mousemove', swipeAction);
                    this.slidesField.addEventListener('mouseup', swipeEnd);
                    this.wrapper.addEventListener('mouseleave', mouseLeave);


                    allowSwitch = false;

                } else {
                    console.log('Neeep');
                }

            };


            this.wrapper.addEventListener('touchstart', swipeStart);
            this.wrapper.addEventListener('mousedown', swipeStart);

            if (this.paginationField && this.nameOfDataAttribute) {

                indicatorArr.forEach(indicator => {
                    indicator.addEventListener('click', e => {
                        const currentIndicator = e.target.getAttribute(`data-${this.nameOfDataAttribute}`);
    
                        let posOnMove = changeToNumber(widthOfMainSlide) * (currentIndicator - 1),
                            posOnMoveGeneral = posOnMove + changeToNumber(widthOfMainSlide);
    
                        if (!indicator.classList.contains('controls-slider-main__dot--active')) {
                            this.slidesField.classList.add('shifting');
                            this.slidesField.style.left = -((this.isEndLess ? posOnMoveGeneral : posOnMove) + ((this.gap ? this.gap : 1) * (currentIndicator))) + 'px';
    
                            indexOfSLide = currentIndicator - 1;
                            showIndexDot(indexOfSLide);
                            activeSlider(indexOfSLide);
                        }
                    });
                });

            }

        }

    }
}


function getEvent() {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
}
