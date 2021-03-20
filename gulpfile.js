const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const browserSync = require('browser-sync').create();

//--- BROWSER SYNC INIT
gulp.task('browser-sync', (done) => {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });
    done();
});

//--- BROWSER SYNC RELOAD
gulp.task('browser-reload', (done) => {
    browserSync.reload();
    done();
});

//--- MOVE IMAGE FILES
gulp.task('image', () => {
    return gulp
        .src(['./assets/images/**/*.*'])
        .pipe(gulp.dest('./dist/assets/images'));
});

//--- MOVE HTML FILES
gulp.task('html', () => {
    return gulp.src(['./public/*.html']).pipe(gulp.dest('./dist'));
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
