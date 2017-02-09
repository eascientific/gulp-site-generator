"use strict";

var gulp = require("gulp");

gulp.task("copy-assets", ["sass", "copy-fonts", "concat-js", "image-min"], function () {
    return gulp.src(["./src/favicon.ico", "./src/*.png"])
        .pipe(gulp.dest("./build"));
});
