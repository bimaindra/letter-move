const path = require('path');
const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const browserSync = require('browser-sync').create();

//--- DIRECTORY MAPPING
const baseDir = {
    app: './src',
    build: './build',
    assets: './src/assets',
    npm: './node_modules',
};

const paths = {
    css: {
        build: baseDir.build + '/assets/css',
    },
    js: {
        src: baseDir.assets + '/js/*.js',
        build: baseDir.build + '/assets/js',
    },
    img: {
        src: baseDir.assets + '/images/**/*',
        build: baseDir.build + '/assets/images',
    },
    fonts: {
        build: baseDir.build + '/assets/fonts',
    },
};

//--- BROWSER SYNC INIT
gulp.task('browser-sync', (done) => {
    browserSync.init({
        server: {
            baseDir: './build',
        },
    });
    done();
});

//--- BROWSER SYNC RELOAD
gulp.task('browser-reload', (done) => {
    browserSync.reload();
    done();
});

//--- TEMPLATE
gulp.task('templates', function () {
    // Assume all partials are in a folder such as source/partials/**/*.hbs
    let partials = gulp
        .src(['source/partials/**/*.hbs'])
        .pipe(handlebars())
        .pipe(
            wrap(
                'Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));',
                {},
                {
                    imports: {
                        processPartialName: function (fileName) {
                            // Strip the extension and the underscore
                            // Escape the output with JSON.stringify
                            return JSON.stringify(
                                path.basename(fileName, '.js')
                            );
                        },
                    },
                }
            )
        );

    let templates = gulp
        .src('source/templates/**/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(
            declare({
                namespace: 'MyApp.templates',
                noRedeclare: true, // Avoid duplicate declarations
            })
        );

    // Output both the partials and the templates as build/js/templates.js
    return merge(partials, templates)
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('copy-js', function () {
    return gulp
        .src('node_modules/handlebars/dist/handlebars.runtime.js')
        .pipe(gulp.dest('build/js/'));
});

gulp.task('copy-html', function () {
    return gulp.src('source/index.html').pipe(gulp.dest('build/'));
});

//--- SERVING FILES
gulp.task(
    'serve',
    gulp.series('html', 'image', 'browser-sync', () => {
        gulp.watch(
            ['./public/*.html'],
            gulp.series('html', 'image', 'browser-reload')
        );
    })
);

//--- DEFAULT TASK
gulp.task('default', gulp.series('serve'));
