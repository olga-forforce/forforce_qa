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

var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
    return gulp.src('./image/(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
});