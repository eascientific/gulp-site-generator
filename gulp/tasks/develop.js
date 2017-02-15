"use strict";

var gulp = require("gulp"),
    connect = require("gulp-connect"),
    gutil = require("gulp-util");

gulp.task("livereload-connect", ["build"], function () {
    connect.server({
        root: "./build",
        livereload: true
    });
});

gulp.task("livereload-html", function () {
    gulp.src("./build")
        .pipe(connect.reload());
});

var _lto = 0;
gulp.task("livereload-watch", function () {
    gulp.watch(["./src/sass/**/*.scss"], ["sass"]);
    gulp.watch(["./src/templates/**/*.hbs"], ["compile"]);
    gulp.watch(["./src/js/**/*.js"], ["build"]);
    gulp.watch(["./src/images/**/*.{gif,jpg,png}"], ["image-min"]);
    gulp.watch(["./src/content/**/*.md"], ["compile"]);
    gulp.watch(["./build/**/*.*"]).on("change", function (event) {
        gutil.log(gutil.colors.green("-"),event.path.replace(process.cwd(),""), gutil.colors.magenta(event.type));
        clearTimeout(_lto);
        _lto = setTimeout(function () {
            gulp.start("livereload-html");
        }, 100);
    });
});

gulp.task("develop", ["livereload-connect", "livereload-watch"]);
