'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var spawn = require('child_process').spawn;
gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.scss', ['lint:scss', 'styles']);
	gulp.watch('src/js/**/*.js', ['lint:javascript', 'javascript']);
	gulp.watch('src/*.html', ['replace']);
});

gulp.task('watch:gulp', function () {
	var p;

	gulp.watch(['gulpfile.js', 'gulp/tasks/*.js'], spawnChildren);
	spawnChildren();

	function spawnChildren(e) {
		// kill previous spawned process
		if (p) {
			p.kill();
		}

		// `spawn` a child `gulp` process linked to the parent `stdio`
		p = spawn('gulp', [], {stdio: 'inherit'});
	}
});
