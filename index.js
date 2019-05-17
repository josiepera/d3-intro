
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('updated');


// d3.select('body').append('p').text('first p tag')
// d3.select('body').append('p').text('first p tag')
// d3.select('body').append('p').text('first p tag')

// d3.selectAll('p').style('color', 'blue')

// d3.select('body')//select the body
//   .selectAll('p')//select all p tags
//   .data(dataset)//puts dataset in the waiting state before processing
//   .enter()//takes data items 1 by 1 and perform further ops on them
//   .append('p')//for eavh item we append a p tag
//   // .text('D3 is awesome!!!!')
//   .text(function(d) { return d; })//returns the data



var dataset = [80,100,56,180,30,40,120,160];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;

var barWidth = (svgWidth / dataset.length) //calculate the width of each bar ede


var svg = d3.select('svg') //select svg container
  .attr("width", svgWidth) //give iit the attribute of width and height
  .attr("height", svgHeight);

var barChart = svg.selectAll("rect") //create a bar chart by first selecting all rectangles
  .data(dataset)//call the data method, takes dataset into waiting state
  .enter()//call enter method, takes dataset from waiting state and perform further ops
  .append("rect")//for each data item, we are appending the rect inside svg container
  .attr("y", function(d) { //attr and function gives the height to each data item on y axis
    return svgHeight - d
  })
  .attr("height", function(d){
    return d;
  })
  .attr("width", barWidth - barPadding)//provide width to barchart
  .attr("transform", function(d, i){
    var translate = [barWidth * i, 0];
    return "translate("+ translate +")";
  })
