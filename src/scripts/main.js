const inputPhrase = document.getElementById("phrase");
const showLetters = document.getElementById("show-letters");

document.getElementById("get-letters").addEventListener("click", () => {
  let inputtedPhrase = inputPhrase.value;

  if (inputtedPhrase.length === 0) {
    insertText();
  } else {
    let inputtedPhraseUpper = inputtedPhrase.toUpperCase();
    let inputtedPhraseObject = inputtedPhraseUpper.split("");
    console.log(inputtedPhraseObject);

    let uniqueLetters = new Set();
    inputtedPhraseObject.forEach((letter) => {
      uniqueLetters.add(letter);
      uniqueLetters.delete(" ");
    });
    console.log(uniqueLetters);

    let createOutput = document.createElement("textarea");
    let textOutput = document.createTextNode([...uniqueLetters.values()]);

    createOutput.appendChild(textOutput);
    createOutput.className = "outputted-letters";
    createOutput.setAttribute("readonly", "readonly");
    showLetters.appendChild(createOutput);

    showLettersWithoutRepetition();
  }
});

//Modal hatch notification
const lettersWithoutRepetition = document.getElementById(
  "letters-without-repetition"
);
const modalButton = document.getElementById("modal-button");

function showLettersWithoutRepetition() {
  lettersWithoutRepetition.style.display = "block";
  modalButton.addEventListener("click", () => {
    lettersWithoutRepetition.style.display = "none";
    document.location.reload(true);
  });
}

const noLettersWarning = document.getElementById("no-letters-warning");
const warningModalButton = document.getElementById("warning-modal-button");

function insertText() {
  noLettersWarning.style.display = "block";
  warningModalButton.addEventListener("click", () => {
    noLettersWarning.style.display = "none";
  });
}
