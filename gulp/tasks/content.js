"use strict";

var gulp = require("gulp"),
    markdownToJson = require("gulp-markdown-to-json"),
    marked = require("marked");

gulp.task("content", ["copy-assets"], function () {
    marked.setOptions({
        highlight: function (code) {
            return require("highlight.js").highlightAuto(code).value;
        },
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    return gulp.src("./src/content/**/*.md")
        .pipe(markdownToJson(marked))
        .pipe(gulp.dest("./build/content"));
});
