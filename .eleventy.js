module.exports = function(eleventyConfig) {
    // Copy the `css` and `js` directories to the output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("image");
    eleventyConfig.addPassthroughCopy("vid");
    eleventyConfig.addPassthroughCopy("js");
  
    // Return the configuration object
    return {
      dir: {
        input: "_pages",
        includes: "../_includes",
        output: "_site"
      }
    };
  };
  