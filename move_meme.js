// Shyon Seyed-Emami, CSC102, Assignment 4.1
// Code copied from https://www.tutorialspoint.com/javascript/javascript_animation.htm
var imgObj = document.getElementById("memeImage");
            var animate ;
            // Function init(): determines the starting point of image
            function init() {
               imgObj = document.getElementById("memeImage");
               imgObj.style.position= 'relative';
               imgObj.style.left = '0px';

            }
            // Function start(): calls setTimeout() function to set the position of imgObj
            function start() {
                document.getElementById("stopButton").disabled = false;
                document.getElementById("startButton" ).disabled = true;
               imgObj.style.left = parseInt(imgObj.style.left) + 200 + 'px';
               animate = setTimeout(moveRight,20);// call moveRight in 20msec
            }
            // Function stop(): clears the timer set by setTimeout() function and to set the object at its initial position.
            function stop() {
                document.getElementById("startButton").disabled = false;
                document.getElementById("stopButton").disabled = true;
               clearTimeout(animate);
               imgObj.style.left = '0px';
            }
            
            window.onload = init;