var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpackConfigTest = require('./webpack.test.config.js');

var babel = require("gulp-babel");


gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});
 


gulp.task("test", function () {
  return gulp.src("./tests/test.js")
    .pipe(webpackStream(webpackConfigTest), webpack)
    .on('error', function(e) {console.log(e.toString()); this.emit('end');})
    .pipe(gulp.dest('./tests/__test__'));

});



gulp.task("webpack", function () {
  return gulp.src("./src/prod.js")
    .pipe(webpackStream(webpackConfig), webpack)
    .on('error', function(e) {console.log(e.toString()); this.emit('end');})
    .pipe(gulp.dest('./dist/js'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/gsb_calendarEh.js', ['test', 'webpack']);
    gulp.watch('./tests/test.js', ['test']);
    gulp.watch('./src/prod.js', ['webpack']);
});

// Default task
gulp.task('default', ['test', 'webpack', 'watch']);
// Build without watch
gulp.task('build', ['webpack']);
