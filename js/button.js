//Buttons Clicked

document.getElementById("addranBtn").addEventListener("click", addrandomCircle);

document.getElementById("addcusBtn").addEventListener("click", addcustomCircle);

document
  .getElementById("deleteallBtn")
  .addEventListener("click", deleteallCircle);

//Function addrandomCircle - Add a random circle to array when addranBtn is clicked.
function addrandomCircle() {
  circleArray.push(
    new Circle(
      randomInt(0, 800),
      randomInt(0, 600),
      randomInt(0, 200),
      randomRGB()
    )
  );
}

//Function addcustomCircle - Add a custom circle to array when addranBtn is clicked.
function addcustomCircle() {
  //Prompt User for circle Size
  let circler = prompt(
    "Please Enter the Size you Would like your Circle to Be:"
  );

  //Prompt User for circle color
  let circleColor = prompt(
    "Please Enter the Color you Would like your Circle to Be:"
  );

  //Add Circle to Arry
  circleArray.push(
    new Circle(randomInt(0, 800), randomInt(0, 600), circler, circleColor)
  );
}

//Function deleteallCircle - Delete all the cirlces in the array
function deleteallCircle() {
  circleArray = [];
}
