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
const gulpWrap = require('gulp-wrap');
const { watch } = require('rollup');
const browserSync = require('browser-sync').create();


//-- ENV
const isDebug = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');


//--- DIRECTORY MAPPING
const root = {
    src: './src',
    build: './build',
    assets: './src/assets',
    npm: './node_modules',
};

const dir = {
    source: {
        public: `${root.src}/public`,
        css: `${root.assets}/css`,
        js: `${root.assets}/js`,
        images: `${root.assets}/images`,
        fonts: `${root.assets}/fonts`,
    },
    build: {
        base: `${root.build}`,
        css: `${root.build}/assets/css`,
        js: `${root.build}/assets/js`,
        images: `${root.build}/assets/images`,
        fonts: `${root.build}/assets/fonts`,
    },
};


//--- BROWSER SYNC INIT
gulp.task('browser-sync', (done) => {
    browserSync.init({
        server: {
            baseDir: dir.build.base,
        },
    });
    done();
});


//--- BROWSER SYNC RELOAD
gulp.task('browser-reload', (done) => {
    browserSync.reload();
    done();
});


//--- COMPILE HBS TEMPLATE
gulp.task('compile-hbs', () => {
    // Assume all partials start with an underscore
    // You could also put them in a folder such as source/templates/partials/*.hbs
    let partials = gulp.src([`${dir.source.public}/partials/**/*.hbs`])
      .pipe(handlebars())
      .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
        imports: {
          processPartialName: function(fileName) {
            // Strip the extension and the underscore
            // Escape the output with JSON.stringify
            return JSON.stringify(path.basename(fileName, '.js').substr(1));
          }
        }
      }));
  
    let templates = gulp.src(`${dir.source.public}/templates/**/*.hbs`)
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'MyApp.templates',
        noRedeclare: true // Avoid duplicate declarations
      }));
  
    // Output both the partials and the templates as build/js/templates.js
    return merge(partials, templates)
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(dir.build.js));
});


//-- COPY JS HBS
gulp.task('copy-js-hbs', () => {
    return gulp
        .src(`${root.npm}/handlebars/dist/handlebars.runtime.js`)
        .pipe(gulp.dest(dir.build.js));
});


//-- COPY HTML
gulp.task('copy-html', () => {
    return gulp.src(`${dir.source.public}/**/*.html`).pipe(gulp.dest(dir.build.base));
});


//-- COMPILE
gulp.task('compile', gulp.series(gulp.parallel('copy-js-hbs', 'copy-html'), 'compile-hbs'));


//--- SERVING FILES
gulp.task('serve', gulp.series('compile', 'browser-sync', () => {
        gulp.watch(
            [`${dir.source.public}/*.html`, `${dir.source.public}/**/*.hbs`],
            gulp.series('compile', 'browser-reload')
        );
    })
);


//--- DEFAULT TASK
gulp.task('default', isDebug ? gulp.series("serve") : gulp.series("compile"));
