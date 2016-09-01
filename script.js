
//Get path start point for placing ball
function pathStartPoint(path) {
    var d = path.attr("d"),
    dsplitted = d.split(" ");
}
function translateAlong(path) {
    var l = path.getTotalLength();
    return function(i) {
        return function(t) {
            var p = path.getPointAtLength(t * l);
            return "translate(" + p.x + "," + p.y + ")";//Move ball
        }
    }
}



var frame = d3.select(".spinner").append("svg")
                .attr("width", "500px")
                .attr("height", "500px")
                .attr("class", "svg-frame")
                .attr("viewBox", "0 0 500 500");

var rail1 = "M250,250c0-61.3-59.7-67.7-81.7-12.3C143,301.4,213.7,350.3,250,355c23.8,3,122.3-4.7,145-105    c21.8-96.5-49-179.3-147.9-179.3c-99.9,0-180.9,81-180.9,180.9c0,100.9,81.8,182.7,182.7,182.7c101.9,0,184.5-82.6,184.5-184.5    c0-103-83.5-186.4-186.4-186.4c-104,0-188.3,84.3-188.3,188.3c0,105,85.2,190.2,190.2,190.2c106.1,0,192.1-86,192.1-192.1    c0-107.2-86.9-194.1-194.1-194.1c-108.3,0-196,87.8-196,196c0,109.4,88.6,198,198,198c110.5,0,200-89.5,200-200    c0,0-7.7-194-198.5-171.3c0,0-131.5,6.3-144.8,172.2S383,334.1,339,236.3C303,156.3,250,256.3,250,250z"
var rail2 = "M248.7,254.9c-31.2,52.8,17,88.6,64.1,52.1C367,265,330.9,187,302,164.5c-18.9-14.7-107.7-58.2-178.2,16.8    c-67.8,72-48.9,179.3,36.3,229.6c86,50.8,196.9,22.2,247.7-63.9C459,260.1,430.1,148,343.2,96.8C255.4,45,142.3,74.2,90.5,161.9    c-52.3,88.7-22.8,203,65.8,255.3c89.6,52.8,205,23.1,257.9-66.5c53.4-90.5,23.3-207.1-67.2-260.5c-91.4-53.9-209.2-23.5-263.1,67.8    c-54.5,92.3-23.8,211.3,68.5,265.7c93.2,55,213.4,24,268.4-69.2C476.5,260.4,445.1,139,351,83.5C255.8,27.4,133.2,59,77.1,154.1    c0,0-92,171,83.9,248.4c0,0,116.5,61.4,212.2-74.7S176.8,115,165.1,221.5C155.4,308.7,251.9,249.5,248.7,254.9z"
var rail3 = "M252.2,254.1c51.3,33.6,89.3-12.9,55-61.6c-39.5-56.1-119.1-23.8-142.9,4.1c-15.6,18.2-63.1,104.9,8.4,178.8    c68.8,71.1,176.8,57.2,231-25.5c54.7-83.6,31.3-195.7-52.3-250.4c-84.4-55.3-197.7-31.6-252.9,52.8    c-55.8,85.3-31.9,199.7,53.3,255.5c86.1,56.4,201.7,32.3,258.1-53.9c57-87,32.6-203.7-54.4-260.7c-87.9-57.5-205.8-32.9-263.3,55    C34.2,237,59,356,147.8,414.1c89.7,58.7,210,33.6,268.7-56.1c59.3-90.6,33.9-212.1-56.6-271.4c-91.5-59.9-214.2-34.3-274.1,57.2    c-60.5,92.4-34.6,216.4,57.8,276.9c0,0,166.5,99.8,252.1-72.2c0,0,66.7-113.5-64.7-215.5s-221.8,186.3-115.9,203    C301.6,349.8,246.9,250.6,252.2,254.1z"
var rail4 = "M248.2,250.7c-42.1-44.5-89.8-8.2-67.8,47.2c25.4,63.7,110.4,50.7,139.9,29.1c19.4-14.1,85.7-87.4,33.2-175.9    c-50.5-85.1-158.8-96.6-230.6-28.6c-72.6,68.6-75.8,183.1-7.1,255.7c69.3,73.3,185,76.5,258.3,7.2c74.1-70,77.3-186.8,7.3-260.9    c-70.7-74.8-188.7-78.1-263.5-7.4c-75.6,71.5-78.9,190.6-7.4,266.2c72.2,76.3,192.6,79.7,268.9,7.5c77.1-72.9,80.5-194.5,7.6-271.6    c-73.6-77.9-196.5-81.3-274.3-7.7c-78.7,74.4-82.1,198.4-7.7,277.1c75.1,79.5,200.5,83,279.9,7.8c80.3-75.9,83.8-202.5,7.9-282.7    c0,0-138.9-135.7-261.9,11.9c0,0-91.2,95,13.1,224.6s258.9-129.8,159.8-170.6C222.3,146.3,252.5,255.3,248.2,250.7z"
var rail5 = "M250.2,255.3c3.7,61.2,63.6,64,82.3,7.4c21.5-65.2-52-109.8-88.5-112.2C220,148.9,122,162.5,105.4,264    c-16,97.6,59.6,176,158.3,170.1c99.7-6,175.7-91.7,169.7-191.4c-6-100.7-92.6-177.5-193.3-171.4C138.5,77.4,60.9,164.8,67,266.5    c6.2,102.8,94.5,181.1,197.2,174.9c103.8-6.2,182.9-95.4,176.7-199.2c-6.3-104.9-96.4-184.8-201.2-178.5    C133.8,70.1,53.1,161.1,59.4,267c6.4,107,98.3,188.5,205.3,182.1c108.1-6.5,190.4-99.3,183.9-207.4    C442.2,132.6,348.4,49.4,239.2,55.9C129,62.5,44.9,157.3,51.5,267.5c0,0,19.3,193.2,208.4,159.2c0,0,130.9-14.2,134.3-180.5    c3.4-166.3-281.8-66.8-232.1,28.1C202.9,352,249.8,249,250.2,255.3z"


var path1 = frame.append("path")
                .attr("d", rail1);
var path2 = frame.append("path")
                .attr("d", rail2);
var path3 = frame.append("path")
                .attr("d", rail3);
var path4 = frame.append("path")
                .attr("d", rail4);
var path5 = frame.append("path")
                .attr("d", rail5);

var group = frame.append("g")
                .attr("class", "gooey");

var ballLightGreen = group.append("circle")
              .attr("r", 20 *3)
              .attr("fill", "#B3D45E") //Lighter Green
              .attr("class", "balls");  

var ballDarkGreen = group.append("circle")
              .attr("r", 20 *3)
              .attr("fill", "#28A483") //Darker Green
              .attr("class", "balls");
              
var ballRed = group.append("circle")
              .attr("r", 10 *3)
              .attr("fill", "#E04A42") //Red
              .attr("class", "balls");
              
var ballYellow = group.append("circle")
              .attr("r", 20 *3)
              .attr("fill", "#EFD24A") //Yellow
              .attr("class", "balls");

var ballPurple = group.append("circle")
              .attr("r", 22 *3)
              .attr("fill", "#603C87") //Purple
              .attr("class", "balls");            

var ballBlue = group.append("circle")
              .attr("r", 15 *3)
              .attr("fill", "#2F639F") //Blue
              .attr("class", "balls");           

var ballPink = group.append("circle")
              .attr("r", 25 *3)
              .attr("fill", "#CF3574") //Pink
              .attr("class", "balls");

var hover = frame.append("circle")
                .attr("r", 20)
                .attr("cx", 60)
                .attr("cy", 50)
                .attr("fill", "#cccccc")
                .on("mouseover", function(){
                    frame.selectAll(".balls").transition()
                        .duration(1000)
                        .attr("transform", "translate(0,0)") //Reset the translate or it'll be X,Y + the translate
                        .attr("cx", 250)
                        .attr("cy", 250)
                })


function animate(ballID, duration, rail, easing) {
    ballID.transition()
        .duration(duration)
        .ease(easing)
        .attrTween("transform", translateAlong(rail.node()))
}




animate(ballLightGreen, 30000 /1, path1, d3.easePolyInOut(t));
animate(ballDarkGreen, 30000 /1, path2, d3.easePolyInOut);
animate(ballRed, 30000 /1, path3, d3.easePolyInOut);
animate(ballYellow, 30000 /1, path4, d3.easePolyInOut);
animate(ballPurple, 30000 /1, path5, d3.easePolyInOut);
animate(ballBlue, 30000 /1, path3, d3.easePolyInOut);
animate(ballPink, 30000 /1, path1, d3.easePolyInOut);