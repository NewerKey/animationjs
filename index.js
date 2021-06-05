//Setting up website//
var heroLady = document.querySelector("#hero-dog");
var villain = document.querySelector("#villain");
var lightning = document.querySelector("#lightning");

//Setting up animation
let lightningStart = { left: "290px" };
let lightningEnd = { left: "900px" };
let options = { duration: 1500 };

let hitTheVillain = () => {
  let villainStart = {
    transform: "scale(1)",
    opacity: 100,
  };

  let villainEnd = {
    transform: "scale(0)",
    opacity: 0,
  };

  let options = { duration: 2000 };
  villain.animate([villainStart, villainEnd], options);
};

//Running animation
lightning.animate([lightningStart, lightningEnd], options).onfinish =
  hitTheVillain;
