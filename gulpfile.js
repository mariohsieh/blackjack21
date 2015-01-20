'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', function () {
    connect.server({
        root: 'public',
        port: 9099
        //livereload: true
    });
});
