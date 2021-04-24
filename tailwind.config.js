// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    prefix: 'wd-',
    mode: 'jit',
    purge: {
        content: [
            './src/public/**/*.html', 
            './src/public/**/*.hbs', 
            './src/assets/js/**/*.js'
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px', // -- mobile
            md: '768px', //-- tablet small
            lg: '992px', //-- tablet large
            xl: '1200px', //-- laptop
            xxl: '1600px', //-- desktop large
        },
        colors: {
            black: '#000000',
            white: '#ffffff',
            dark1: '#353b48',
            dark2: '#2f3640',
            grey1: '#f5f6fa',
            grey2: '#dcdde1',
            red1: '#e84118',
            red2: '#c23616',
            green1: '#4cd137',
            green2: '#44bd32',
            blue1: '#00a8ff',
            blue2: '#0097e6',
            navy1: '#273c75',
            navy2: '#192a56',
            yellow1: '#fbc531',
            yellow2: '#e1b12c',
            purple1: '#9c88ff',
            purple2: '#8c7ae6',
        },
        fontFamily: {
            'base': 'Nunito Sans, sans-serif',
            'secondary': 'Roboto, sans-serif',
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900,
        },
        extend: {
            borderWidth: {
                '1' : '1px',
            },
            zIndex: {
                '-10': -10,
                '-20': -20,
                '-30': -30,
                '-40': -40,
                '-50': -50,
                '-25': -25,
                '-50': -50,
                '-75': -75,
                '-100': 100,
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const container = {
                '.container': {
                    maxWidth: '100%',
                    padding: '0 1rem',
                    '@screen sm': {
                        maxWidth: '100%',
                        padding: '0 1rem',
                    },
                    '@screen md': {
                        maxWidth: '688px',
                        padding: '0',
                    },
                    '@screen lg': {
                        maxWidth: '864px',
                        padding: '0',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                        padding: '0',
                    },
                    '@screen xxl': {
                        maxWidth: '1350px',
                        padding: '0',
                    },
                },
            };

            addUtilities(container, ['responsive']);
        }),
    ],
};
