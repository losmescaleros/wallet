const gulp = require('gulp');
const nodemon = require('nodemon');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('serve', function() {
    nodemon('-w server/index.js server/index.js');
});

gulp.task('build', function() {
    gulp.src('./node_modules/angular/angular.min.js')
        .pipe(gulp.dest('./client/lib/'));

    gulp.src('./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js')
        .pipe(gulp.dest('./client/lib'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css') 
        .pipe(gulp.dest('./client/lib/'));

    gulp.src('./node_modules/font-awesome/css/font-awesome.css')
        .pipe(gulp.dest('./client/lib'));
    gulp.src('./node_modules/font-awesome/fonts/**/*')
        .pipe(gulp.dest('./client/fonts/'));
});

gulp.task('clean', function() {
    return del([
        'client/lib/**/*'
    ]);
});

gulp.task('start', function(cb) {
    runSequence(
        ['clean'], 
        ['build'], 
        ['serve'],
        cb);
});