// get data from data.js
const tabledata = data;

// reference html table using d3
var tbody = d3.selectAll('tbody');

// create function to build table
function buildTable(data){
    // clear tbody
    tbody.html("");

    // create a row in tbody for each row in the data object
    data.forEach((datarow) => {
        let row = tbody.append("tr");

        // create cells in tr for each value in datarow
        Object.values(datarow).forEach((val) => {
            let cell = row.append("td");

            // assing the text of the each cell to the HTML table <td> 
            cell.text(val);
        });
    });
}

// create function to handle click event
function handleClick(){
    let date = d3.selectAll("#datetime").property("value");
    let filtereddata = tabledata;

    // check if date is entered
    if (date){
        
        //assign filterdata = tabledate for the date entered
        filtereddata = filtereddata.filter(row => row.datetime === date);
    };

    // build table using filtered data
    buildTable(filtereddata);
    
};

// define event and call function to deal with event
d3.selectAll("#filter-btn").on("click", handleClick);

// create default table to display on webpage
buildTable(tabledata);
