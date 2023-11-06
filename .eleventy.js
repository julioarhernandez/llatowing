
module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./wp-content")
        .addPassthroughCopy("./wp-includes")
        .addPassthroughCopy("./favicon*")
        .addPassthroughCopy(".wp-json")

};




