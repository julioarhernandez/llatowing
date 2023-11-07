const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./wp-content")
        .addPassthroughCopy("./wp-includes")
        .addPassthroughCopy("./favicon*")
        .addPassthroughCopy(".wp-json")
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

};




