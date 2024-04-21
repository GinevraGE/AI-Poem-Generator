function displayNewPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dfa836f02b3ot61e0f995ec04f06a183";
  let prompt = `User instructions:Generate unique and beautiful poems about ${instructionsInput.value}`;
  let context =
    "You are an excellent romantic poem generator, your mission is to generate  a 4 line romantic poem in basic HTML,do not include a title to the poem and make sure to follow the User instructions ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayNewPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
