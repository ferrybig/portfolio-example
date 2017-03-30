'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function () {
	connect.server({
		port: 3002,
		root: 'public'
	});
	browserSync.init({
		proxy: 'http://localhost:3002/'
	});
	watch('public/**/*')
		.pipe(reload({stream: true}));
});
