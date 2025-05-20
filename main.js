// Get the Handlebars template source from the script tag with id 'ifHelper'
const source = document.getElementById('ifHelper').innerHTML;

// Compile the Handlebars template
const template = Handlebars.compile(source);

// Define the context object to pass data to the template
const context = {
  opinion: true
}

// Generate the HTML by applying the context to the template
const compiledHtml = template(context);

// Get the element where the compiled HTML will be inserted
const debateElement = document.getElementById('debate');

// Insert the compiled HTML into the page
debateElement.innerHTML = compiledHtml;
