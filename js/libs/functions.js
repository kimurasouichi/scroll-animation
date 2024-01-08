export class TextAnimator {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  spanWrapText() {
    this.elements.forEach((element) => {
      const texts = element.textContent.split("");
      element.textContent = "";
      let outputTexts = "";

      texts.forEach((text) => {
        outputTexts += text === " " ? " " : `<span>${text}</span>`;
      });

      element.innerHTML = outputTexts;
    });
  }

  spanWrapText2() {
    this.elements.forEach((element) => {
      const texts = element.textContent.split("");
      element.textContent = "";
      let outputTexts = "";

      texts.forEach((text) => {
        outputTexts += text === " " ? " " : `<span><span>${text}</span></span>`;
      });

      element.innerHTML = outputTexts;
    });
  }
}
