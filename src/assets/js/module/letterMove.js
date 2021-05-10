/* eslint-disable no-control-regex */
/**
 * file: LetterMove.js
 * scripted by: Bima Indra | bimaindramulya@gmail.com
 * --------------------------------------------
 * WONGDARJO
 */

import anime from 'animejs/lib/anime.es';

const LetterMove = () => {
  const item = document.querySelectorAll('[data-animate]');

  item.forEach((element) => {
    const text = element.querySelector('.js-animate-text');
    const button = element.closest('figure').querySelector('.js-click');
    const stringNumber = element.dataset.animate;
    const elementNumber = Number(stringNumber);

    if (elementNumber === 1) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /\S/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          translateY: ['3.75rem', 0],
          translateZ: 0,
          duration: 1000,
          delay: (el, i) => 50 * i,
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }

    if (elementNumber === 2) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /\S/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          scale: [5, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: 'easeOutExpo',
          duration: 1000,
          delay: (el, i) => 70 * i,
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }

    if (elementNumber === 3) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /\S/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          translateY: [-200, 0],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: (el, i) => 30 * i,
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }

    if (elementNumber === 4) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /\S/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight wd-origin-top-left">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          rotateY: [-90, 0],
          duration: 1000,
          delay: (el, i) => 45 * i,
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }

    if (elementNumber === 5) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /\S/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight wd-origin-bottom">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          scale: [0, 1],
          duration: 1000,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1),
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }

    if (elementNumber === 6) {
      // Wrap every word
      text.innerHTML = text.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        '<span class="js-wrapper-word wd-inline-block wd-leading-tight">$&</span>',
      );

      // Get every word
      const wrappedWord = element.querySelectorAll('.js-wrapper-word');

      // Line
      // const line = element.querySelector('.js-animate-line');

      // Execute animate!
      const init = () => {
        const animeInstance = anime.timeline({
          loop: false,
        });

        animeInstance.add({
          targets: button,
          opacity: 0,
          duration: 500,
          easing: 'easeOutExpo',
        }).add({
          targets: wrappedWord,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1000,
          offset: '-=775',
          delay: (el, i) => 72 * (i + 1),
        }).add({
          targets: button,
          opacity: 1,
          duration: 500,
          easing: 'easeOutExpo',
        });
      };

      init();

      // When button clicked
      button.addEventListener('click', () => {
        init();
      });
    }
  });
};

export default LetterMove;
