"use strict";

var gulp = require("gulp"),
    runSequence = require('run-sequence');

gulp.task("build", function(done) {
    runSequence("minify-html", "image-min", "sass", "copy-css", "copy-public", function() {
        done();
    });
});
