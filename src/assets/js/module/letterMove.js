/**
 * file: letterMove.js
 * scripted: bimaindramulya@gmail.com
 * --------------------------------------------
 * WONGDARJO
 */

import anime from 'animejs/lib/anime.es.js';

export function letterMove() {

    const item = document.querySelectorAll('[data-animate]');

    item.forEach(element => {

        const text = element.querySelector('.js-animate-text');
        const wrappedWord = element.querySelectorAll('.js-wrapper-word');
        const button = element.querySelector('.js-click');

        if(element.dataset.animate == 1) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/\S/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                translateY: ['3rem', 0],
                translateZ: 0,
                duration: 1000,
                delay: (el, i) => 50 * i,
            });
        };

        if(element.dataset.animate == 2) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/\S/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: 'easeOutExpo',
                duration: 1000,
                delay: (el, i) => 70*i
            });
        };

        if(element.dataset.animate == 3) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/\S/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                translateY: [-100,0],
                easing: 'easeOutExpo',
                duration: 1400,
                delay: (el, i) => 30 * i
            });
        };

        if(element.dataset.animate == 4) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/\S/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight wd-origin-top-left">$&</span>');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                rotateY: [-90, 0],
                duration: 1300,
                delay: (el, i) => 45 * i
            });
        };

        if(element.dataset.animate == 5) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/\S/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight wd-origin-bottom">$&</span>');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            });
        };

        if(element.dataset.animate == 6) {
            
            //-- wrap every word
            text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>');
            
            //-- line
            const line = element.querySelector('.js-animate-line');

            //-- execute animate!
            const animeIt = anime.timeline({
                loop: false 
            })
            
            animeIt.add({
                targets: wrappedWord,
                opacity: [0,1],
                easing: 'easeOutExpo',
                duration: 700,
                offset: '-=775',
                delay: (el, i) => 72 * (i+1)
            });
        };
    });
};
