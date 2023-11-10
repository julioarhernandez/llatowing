const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./wp-content")
        .addPassthroughCopy("./wp-includes")
        .addPassthroughCopy("./favicon*")
        .addPassthroughCopy(".wp-json")
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addFilter('evenOdd', (number) => {
        return number % 2 === 0 ? 'even' : 'odd';
    });
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            lastModifiedProperty: "modified",
            hostname: "https://www.llatowing.com",
        },
    });
};




