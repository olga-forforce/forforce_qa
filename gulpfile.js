'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', gulp.series(['sass']));
});

const image = require('gulp-image');

gulp.task('image', function () {
    return gulp.src('./image/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/imeges'));
});