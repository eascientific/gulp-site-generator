"use strict";

var gulp = require("gulp"),
    fs = require("fs"),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    cssnext = require('postcss-cssnext'),
    rucksack = require('rucksack-css'),
    lost = require("lost");

gulp.task("copy-css", function () {
    var siteData = JSON.parse(fs.readFileSync("./site.json", "utf8"));
    var styleSheet = "style.css";
    if (siteData.styleSheet) {
        styleSheet = siteData.styleSheet;
    }

    var plugins = [
        lost(),
        rucksack(),
        cssnext({browsers: ['last 3 version']}),
        cssnano({autoprefixer: false})
    ];
    return gulp.src(["./src/css/**/*.css"])
        .pipe(postcss(plugins))
        .pipe(gulp.dest("./build/css"));
});
