
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
                .attr("class", "svg-frame")
                .attr("viewBox", "0 0 500 500"); // It's naturally 0 0 500 500. 
                                                     // Changing it to 600 600 makes it a bit smaller
                                                     // Changing it to -50 -50 re centers it.  

               




  ///////////////////////
 //BALLS////////////////
///////////////////////

//PATHS//
var rail2 = "M252.941,250.338c-79.606,49.82-8.533,166.434,81.392,120.662    c30.278-15.41,64.228-79.551,66.667-150.667c3.021-88.102-80.866-128.893-181.918-109.195    C117.011,131.035,62.438,176.261,82.333,278.333c20.098,103.104,93.563,164.098,196.667,144    c104.146-20.301,162.969-114.521,142.667-218.667C401.162,98.471,315.582,40.686,210.386,61.191    C104.126,81.903,34.778,184.834,55.489,291.093c20.922,107.334,124.893,177.383,232.226,156.461    c108.417-21.133,179.174-126.154,158.04-234.57c0,0-19.547-133.388-148.916-121.076c0,0-184.889,2.757-129.86,166.589    C222.008,422.328,376.041,263.359,252.941,250.338"
var rail2b = "M250.2,250c79.4-14,68.4-99.3-18-91.8c-29.1,2.5-62,13-86.9,68.9c-30.8,69.2-2.5,131.3,84.3,148.2   c87.7,17,164.6-4.1,181.7-91.8c17.2-88.6-40.6-174.3-129.2-191.5c-89.5-17.4-176.1,41-193.5,130.5    c-17.6,90.4,41.4,177.9,131.8,195.4c91.3,17.7,179.6-41.9,197.4-133.1c17.9-92.2-42.3-181.5-134.5-199.4    C190.3,67.2,100.2,128,82.1,221.2c0,0-27.4,112.5,79.5,144.4c0,0,148.1,57.4,157.1-90.8C327.6,126.6,156.4,200,250.2,250"
var rail2c = "M250.2,250c-23.6,77.1,58.5,108.4,91,28.1c11-27,16.6-61.2-21.9-108.7c-47.7-58.8-115.9-61.8-170.4,7.9        c-55,70.4-71,148.6-0.7,203.6c71.1,55.5,173.8,42.9,229.3-28.2c56.1-71.8,43.4-175.5-28.5-231.6c-72.5-56.7-177.3-43.8-234,28.7     C58,223.1,71,328.9,144.2,386.2c74,57.8,180.9,44.7,238.7-29.3c58.4-74.8,45.1-182.7-29.6-241.1c0,0-87.8-75.5-164.8,5.3    c0,0-118.3,105.9,9.6,181.2C326.1,377.5,337.4,189.1,250.2,250"
var rail3 = "M244.268,250c-106.678-28.647-90,116-0.5,142.376  c104.555,30.813,198.25-31.69,198.25-141.043c0-108.258-87.887-196.02-196.145-196.02c-107.176,0-194.123,86.883-194.123,194.06  c0,106.104,85.983,192.119,192.088,192.119c105.043,0,190.182-85.154,190.182-190.197c0-103.994-84.311-188.296-188.304-188.296  c-102.953,0-186.417,83.46-186.417,186.413c0,101.923,82.623,184.549,184.547,184.549c100.904,0,182.702-81.8,182.702-182.704  c0-99.895-80.98-180.876-180.876-180.876c-98.897,0-179.068,80.171-179.068,179.068c0,97.907,66.342,142.929,164.163,147.052  c86,3.625,145.34-54.517,128.75-149.5C330.912,83.213,93.268,176,244.268,250"
var rail3b = "M250,250c69.92,85.511,150.896-16.757,81.962-115.922    c-62.216-89.5-179.493-89.941-243.3-1.134c-63.168,87.918-43.002,210.471,44.918,273.64c87.038,62.536,208.345,42.71,270.882-44.33    c61.911-86.169,42.271-206.192-43.896-268.104c-85.311-61.294-204.139-41.816-265.43,43.491    c-60.681,84.454-41.401,202.113,43.054,262.792c83.61,60.072,200.091,40.994,260.164-42.615    c59.472-82.774,40.584-198.086-42.19-257.558c-81.947-58.876-196.104-40.174-254.982,41.771    c-58.288,81.126-39.776,194.143,41.353,252.433c80.314,57.706,192.203,39.377,249.909-40.939    c57.129-79.512,29.521-154.785-47.516-215.21c-67.728-53.125-155.663-33.034-218.356,40.22C0.148,326.247,337.264,464.518,250,250"
var rail4 = "M249.5,250.5c-97.612-51.698-117.877,179-7.42,179  c109.353,0,200.5-68.147,200.5-177.5c0-108.259-87.762-196.02-196.02-196.02c-107.176,0-194.06,86.883-194.06,194.06  c0,106.104,86.015,192.119,192.12,192.119c105.043,0,190.198-85.154,190.198-190.198c0-103.993-84.303-188.296-188.296-188.296  c-102.953,0-186.413,83.46-186.413,186.413c0,101.924,82.625,184.549,184.549,184.549c100.904,0,182.704-81.799,182.704-182.703  c0-99.896-80.981-180.877-180.877-180.877c-98.896,0-179.067,80.171-179.067,179.068c0,97.908,79.369,177.277,177.277,177.277  c96.928,0,175.503-78.576,175.503-175.504c0-95.959-77.789-173.75-173.749-173.75c-95,0-172.011,77.012-172.011,172.012  c0,94.049,77.093,163.225,171.143,163.225c93.109,0,135.625-69.766,135.625-162.875c0-92.178-96.67-135.103-135.625-129.125  C72.08,148,170.5,386.5,249.5,250.5"
var rail4b = "M249.5,250.5c105.689,32.104,77.364-200.678-31.06-179.583  C111.101,91.802,34.646,176.103,55.53,283.442c20.675,106.266,123.583,175.651,229.849,154.976  c105.203-20.469,173.895-122.346,153.426-227.55C418.541,106.716,317.682,38.712,213.53,58.977  C110.42,79.038,43.096,178.888,63.158,281.998C83.019,384.077,181.87,450.728,283.948,430.867  c101.059-19.662,167.043-117.525,147.381-218.583C411.863,112.236,314.979,46.912,214.932,66.377  C115.885,85.648,51.213,181.563,70.483,280.61c19.078,98.057,114.035,162.082,212.092,143.004  c97.076-18.888,160.46-112.895,141.573-209.971C405.449,117.538,312.383,54.788,216.278,73.486  C121.133,91.998,59.011,184.134,77.522,279.277c18.327,94.193,109.541,155.695,203.733,137.369  c93.251-18.144,154.138-108.445,135.994-201.697C399.288,122.631,310.403,69.452,218.084,87.414  c-91.396,17.782-119.805,94.383-102.022,185.779c17.604,90.48,120.693,114.153,157.79,100.846  C439.073,314.77,301.072,101.916,249.5,250.5"
var rail4c = "M247.8,252.3c48.6-86.5-157.2-110-159.7-10.8c-2.4,98.2,56.7,181.6,154.9,184c97.2,2.4,178-74.4,180.4-171.7    c2.4-96.3-73.7-176.2-169.9-178.6c-95.3-2.4-174.5,73-176.8,168.2c-2.3,94.3,72.2,172.7,166.6,175.1c93.4,2.3,171-71.5,173.3-164.9    c2.3-92.5-70.8-169.3-163.2-171.6c-91.5-2.3-167.6,70.1-169.9,161.6c-2.3,90.6,69.4,165.9,160,168.2    c89.7,2.2,164.2-68.7,166.5-158.4c2.2-88.8-68-162.6-156.8-164.8c-87.9-2.2-161,67.3-163.2,155.2c-2.2,87,66.6,159.4,153.7,161.5    c86.2,2.1,157.8-66,159.9-152.2c2.1-85.3-65.3-156.2-150.6-158.3c-84.5-2.1-148.3,65.6-150.4,150.1    c-2.1,83.6,59.6,123.4,143.2,125.4c82.8,2.1,138.5-83,134-118.1C359.7,95.9,76.6,127,247.8,252.3"

var path2 = frame.append("path")
                .attr("d", rail2)
var path2b = frame.append("path")
                .attr("d", rail2b);
var path2c = frame.append("path")
                .attr("d", rail2c);
var path3 = frame.append("path")
                .attr("d", rail3);
var path3b = frame.append("path")
                .attr("d", rail3b);
var path4 = frame.append("path")
                .attr("d", rail4);
var path4b = frame.append("path")
                .attr("d", rail4b);
var path4c = frame.append("path")
                .attr("d", rail4c); 

function drawBalls(){
    var ballsGroup = frame.append("g")
                    .attr("class", "gooey")
                    .attr("id", "ballsGroup")
                    .attr("opacity", 0);

    var ballLightGreen = ballsGroup.append("circle")
                  .attr("r", 40)
                  .attr("fill", "#B3D45E") //Lighter Green
                  .attr("id", "ballLightGreen")
                  .attr("class", "balls");  

    var ballPurple = ballsGroup.append("circle")
                  .attr("r", 45)
                  .attr("fill", "#603C87") //Purple
                  .attr("id", "ballPurple")
                  .attr("class", "balls");            
                  
    var ballRed = ballsGroup.append("circle")
                  .attr("r", 50)
                  .attr("fill", "#E04A42") //Red
                  .attr("id", "ballRed")
                  .attr("class", "balls");
                  
    var ballYellow = ballsGroup.append("circle")
                  .attr("r", 55)
                  .attr("fill", "#EFD24A") //Yellow
                  .attr("id", "ballYellow")
                  .attr("class", "balls");

    var ballDarkGreen = ballsGroup.append("circle")
                  .attr("r", 65)
                  .attr("fill", "#28A483") //Darker Green
                  .attr("id", "ballDarkGreen")
                  .attr("class", "balls");

    var ballBlue = ballsGroup.append("circle")
                  .attr("r", 65)
                  .attr("fill", "#2F639F") //Blue
                  .attr("id", "ballBlue")
                  .attr("class", "balls");           

    var ballPink = ballsGroup.append("circle")
                  .attr("r", 70)
                  .attr("fill", "#CF3574") //Pink
                  .attr("id", "ballPink")
                  .attr("class", "balls");
};





  ///////////////////////
 //LOGO/////////////////
///////////////////////

function drawPlaceholderBall(){
    var placeholderBall = frame.append("circle")
                  .attr("r", 72)
                  .attr("cx", 249)
                  .attr("cy", 251)
                  .attr("fill", "red")
                  .attr("id", "placeholderBall");
};







   ////////////////////////////
  //INTERACTION & ////////////
 //ANIMATION/////////////////
////////////////////////////


//Start//////////////////////////////////////////////////////////////////////////////////////////////////////
function start(){
    drawPlaceholderBall();
    drawBalls();

    frame.selectAll(".balls").transition()
                        .duration(500)
                        .attr("cx", 0)
                        .attr("cy", 0);


    var logoSlashStart = "243.694,202.666 228.249,229.413 228.316,229.529 243.771,202.798";
    var logoSlashEnd = "244.694,203.666 229.249,230.413 260.135,283.841 291.02,283.905";

    var logoSlash = frame.append("polygon")
                        .attr("points", logoSlashStart)
                        .attr("fill", "#ffffff")
                        .attr("opacity", 0);

    var logoCircle = frame.append("circle")
                            .attr("cx", 223.662)
                            .attr("cy", 267.508)
                            .attr("r", 0)
                            .attr("fill", "#ffffff")
                            .attr("opacity", 0);

    logoSlash.transition()
            .duration(500)
            .ease(d3.easePolyIn)
            .attr("points", logoSlashEnd)
            .attr("opacity", 1);

    logoCircle.transition()
            .duration(500)
            .ease(d3.easePolyIn)
            .attr("r", 15.111)
            .attr("opacity", 1);

    //Unhide balls once they are transformed to the center of the frame
    //To avoid the balls starting in the top left, then jumping to the center once the animation starts
    //50ms delay they've to ensure they dont unhide while they're still top left
    setTimeout(function(){
        frame.selectAll("#ballsGroup")
                .attr("opacity", 1);
    }, 3050)

    setTimeout(function(){
        spin();
    }, 3000)

  //Animate out logo
    setTimeout(function(){
        logoSlash.transition()
                .duration(500)
                .ease(d3.easePolyIn)
                .attr("points", logoSlashStart)
                .attr("opacity", 0);       

        logoCircle.transition()
                .duration(500)
                .ease(d3.easePolyIn)
                .attr("r", 0)
                .attr("opacity", 0);
                
    }, 4000);


};
////////////////////////////////////////////////////////////////////////////////////////////////////////////




//Spin//////////////////////////////////////////////////////////////////////////////////////////////////////
function spin(){
    //Remove placeholder ball now that real balls are centered
    //Delay to make sure this happens after the ballGroup is unhidden
    setTimeout(function(){
        frame.selectAll("#placeholderBall").remove();
    }, 60)

    //Reset the position of the balls so when they transition again, they're not effected by x and y pos. I think.
    // frame.selectAll(".balls").attr("cx", null)
    //                         .attr("cy", null);



    //Start spinning
    function animate(ballID, rail) {
        frame.selectAll(ballID)
            .transition()
            .duration(15000)
            .ease(d3.easePolyInOut)
            // .attr("transform", "translate(0,0)") //Reset the translate or it'll be X,Y + the translate
            .attrTween("transform", translateAlong(rail.node()))
    }

    animate("#ballLightGreen", path3b);
    animate("#ballDarkGreen", path2b);
    animate("#ballBlue", path2c);
    animate("#ballRed", path3);
    animate("#ballYellow", path4);
    animate("#ballPurple", path4b);
    animate("#ballPink", path4c);

    //Repeat
    // setTimeout(function(){
    //     start();        
    // }, 15000)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////




//Spread////////////////////////////////////////////////////////////////////////////////////////////////////
function spread(){
    function animateToSpread(ballVar, cx, cy){
        frame.selectAll(ballVar).transition()
                .duration(500)
                .attr("transform", "translate(0,0)") //Reset the translate or it'll be X,Y + the translate
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 52);
    }
    animateToSpread("#ballLightGreen", 442.1, 306.4) //PIM
    animateToSpread("#ballDarkGreen", 124, 186.3) //Creative
    animateToSpread("#ballBlue", 184.8, 306.4) //Customer Targeting
    animateToSpread("#ballRed", 248.3, 186.3) //Development
    animateToSpread("#ballYellow", 371.9, 185.8) //Insight
    animateToSpread("#ballPurple", 314, 306.4) //Planning
    animateToSpread("#ballPink", 58.2, 306.4) //Client services

   
    function animateBackToMiddle(ballVar, radius){
        frame.selectAll(ballVar).transition()
                .duration(500)
                .attr("cx", 250)
                .attr("cy", 250)
                .attr("r", radius);
    }

    setTimeout(function(){
        animateBackToMiddle("#ballLightGreen", 40);
        animateBackToMiddle("#ballDarkGreen", 65);
        animateBackToMiddle("#ballBlue", 65);
        animateBackToMiddle("#ballRed", 50);
        animateBackToMiddle("#ballYellow", 55);
        animateBackToMiddle("#ballPurple", 45);
        animateBackToMiddle("#ballPink", 70);
    }, 3000);

    setTimeout(function(){
        frame.selectAll(".balls").remove();
    }, 3990)

    setTimeout(function(){
        start();
    }, 4000)

};

//Spread all balls on hover
frame.selectAll(".balls")
                .on("mouseover", function(){
                    spread()
                    console.log("hovered")
                })

////////////////////////////////////////////////////////////////////////////////////////////////////////////


start();


  
//Return to centre when you hover a ball
// frame.selectAll(".balls")
//             .on("mouseover", function(){
//                 frame.selectAll(".balls").transition()
//                     .duration(1000)
//                     .attr("transform", "translate(0,0)") //Reset the translate or it'll be X,Y + the translate
//                     .attr("cx", 250)
//                     .attr("cy", 250);

//                 start();
//             })

