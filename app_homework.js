// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the submit button
var submit = d3.select("#datetime");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufo);

  var filteredData = ufo.filter(sight => sight.datetime === inputValue);

  console.log(filteredData);
;
  // First, create an array with just the age values
  va1r summary = filteredData.map(sight);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var Date = "value";
  var City = "value";
  var Country = "value";
  var Shape = "value";
  var Duration = "value";
  var Comments = "value";

  // Finally, add the summary stats to the `ul` tag
  d3.select(".summary")
    .append("th").text(`Date: `)
    .append("th").text(`City: `)
    .append("th").text(`Median: `)
    .append("th").text(`Country: `)
    .append("th").text(`Duration: `)
    .append("th").text(`Comments: `);
});



