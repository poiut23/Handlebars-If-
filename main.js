// Retrieve the Handlebars template source from the script tag with id 'ifHelper'
const source = document.getElementById('ifHelper').innerHTML;

// Compile the Handlebars template source into a reusable function
const template = Handlebars.compile(source);

// Define the context object to provide data for the template rendering
const context = {
  opinion: false // Set to true or false to control which message is shown
};

// Generate the HTML by applying the context data to the compiled template
const compiledHtml = template(context);

// Select the DOM element where the rendered HTML will be inserted
const debateElement = document.getElementById('debate');

// Insert the generated HTML into the selected element on the page
debateElement.innerHTML = compiledHtml;
