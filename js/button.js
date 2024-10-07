//Buttons Clicked

document.getElementById("addranBtn").addEventListener("click", addrandomCircle);

document.getElementById("addcusBtn").addEventListener("click", addcustomCircle);

document
  .getElementById("deleteallBtn")
  .addEventListener("click", deleteallCircle);

document.getElementById("surpriseBtn").addEventListener("click", surprise);

//Function addrandomCircle - Add a random circle to array when addranBtn is clicked.
function addrandomCircle() {
  circleArray.push(
    new Circle(
      randomInt(0, 800),
      randomInt(0, 600),
      randomInt(0, 150),
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

function surprise() {
  let possiblity = randomInt(0, 10);
  console.log(possiblity);
  if (possiblity > 2) {
    alert("Awww... You did not recieve anything...");
  } else {
    alert("✨YOU WON A SURPRISE✨");
    alert("Would you like to see what it is?");
    for (let i = 0; i < randomInt(100, 500); i++) {
      circleArray.push(
        new Circle(
          randomInt(0, 800),
          randomInt(0, 600),
          randomInt(0, 250),
          randomRGB()
        )
      );
    }
  }
}
