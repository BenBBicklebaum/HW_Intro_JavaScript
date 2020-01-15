// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
table.attr("class", "table table-striped");

// creates the original table
tableData.forEach((record) => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {
  // Select the input element and get vlaue
  var dateElement = d3.select("#datetime");
  var dateValue = dateElement.property("value");

  // Select the input element and get vlaue
  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value");

  // Select the input element and get vlaue
  var stateElement = d3.select("#state");
  var stateValue = stateElement.property("value");

  // Select the input element and get vlaue
  var countryElement = d3.select("#country");
  var countryValue = countryElement.property("value");

  // Select the input element and get vlaue
  var shapeElement = d3.select("#shape");
  var shapeValue = shapeElement.property("value");

  // each if statement applies a new filter.  The console.log is for troubleshooting. 
  if(dateValue != ""){
    console.log("date value is not null")
    function filterdate(date) {
      return date.datetime === dateValue;  
    }
    var filterdata = tableData.filter(filterdate);
  }
  else {
    console.log("date value is null")
    var filterdata = tableData;
  }

  if(cityValue != ""){
    console.log("city value is not null")
    function filtercity(date) {
      return date.city === cityValue;  
    }
    var filterdata = filterdata.filter(filtercity);
  }
  else {
    console.log("city value is null")
    var filterdata = filterdata;
  }

  if(stateValue != ""){
    console.log("state value is not null")
    function filterstate(date) {
      return date.state === stateValue;  
    }
    var filterdata = filterdata.filter(filterstate);
  }
  else {
    console.log("state value is null")
    var filterdata = filterdata;
  }
    
  if(countryValue != ""){
    console.log("country value is not null")
    function filtercountry(date) {
      return date.country === countryValue;  
    }
    var filterdata = filterdata.filter(filtercountry);
  }
  else {
    console.log("country value is null")
    var filterdata = filterdata;
  }

  if(shapeValue != ""){
    console.log("shape value is not null")
    function filtershape(date) {
      return date.shape === shapeValue;  
    }
    var filterdata = filterdata.filter(filtershape);
  }
  else {
    console.log("shape value is null")
    var filterdata = filterdata;
  }

  //createing tables based on the filtered data set
  if (filterdata != ""){
    d3.select("tbody").html("");
    filterdata.forEach((record) => {
      var row = tbody.append("tr");
      Object.entries(record).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
      });
  }
  else{
    d3.select("tbody").html("");
  }

});