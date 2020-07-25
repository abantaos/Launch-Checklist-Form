/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


// Write your JavaScript code here!



window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required.");
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Pilot name and copilot name must be text. Fuel level and cargo mass must be numbers.");
      } else {
         
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Coilot ${copilotName.value} is ready for launch.`;

             if (fuelLevel.value < 10000){
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
               fuelStatus.innerHTML = "Not enough fuel";
            } else if (cargoMass.value > 10000){
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = "Too much mass";
           } else {
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = "Shuttle is ready for launch";
               launchStatus.style.color = "green";
           }
         };
   });
});




