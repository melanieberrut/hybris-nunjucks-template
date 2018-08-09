# Hybris Nunjucks Templating tool

This is my setup and the steps to follow to create quick prototype pages in a Hybris using [Nunjucks](https://mozilla.github.io/nunjucks/).

# Steps
- Copy the sections in the provided `Gruntfile.js` to the existing Gruntfile on the storefront folder
- Make sure you have the npm packages as well from the `package.json` file
- Copy the `templates` folder into the `<storefront>/web/webroot/WEB-INF/_ui-src/responsive/`
- In the `templates/partials/_head.html` you can add the URL to you existing stylesheet
- In the terminal, run `grunt template` and start building some pages

That's it.