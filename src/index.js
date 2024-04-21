function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Diamonds are sparkly, but none as brilliant as you are!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
