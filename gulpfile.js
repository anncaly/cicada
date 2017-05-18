'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const jade         = require('gulp-jade');
const pug          = require('gulp-pug');
const notify       = require('gulp-notify');

gulp.task('jade', function(done) {
    return gulp.src('./*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
done();
});

gulp.task('sass', function(done) {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('build/css'));
done();
});

gulp.task('watch', function(done) {
  gulp.watch('scss/*.scss' ['sass']);
  gulp.watch('./*.jade' ['jade']);
done();    
});