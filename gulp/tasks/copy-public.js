"use strict";

var gulp = require("gulp");

gulp.task("copy-public", function () {
    return gulp.src(["./src/public/**/*"])
        .pipe(gulp.dest("./build/public"));
});
