const coinSelectorTop = document.querySelectorAll(
  ".education-top-carousel-selector"
);
const coinSelectorBottom = document.querySelectorAll(
  ".education-bottom-carousel-selector"
);

const topCarouselContainer = document.querySelector(
  ".education-carousel-content-container-top"
);
const bottomCarouselContainer = document.querySelector(
  ".education-carousel-content-container-bottom"
);

const topCoinArray = Array.from(coinSelectorTop);
const bottomCoinArray = Array.from(coinSelectorBottom);

coinSelectorTop.forEach((coin) => {
  coin.addEventListener("click", () => {
    coinSelectorTop.forEach((selector) => {
      selector.classList.remove("active-carousel-selector");
    });
    coin.classList.add("active-carousel-selector");
    moveTopContainer(topCarouselContainer, coin);
  });
});

coinSelectorBottom.forEach((coin) => {
  coin.addEventListener("click", () => {
    coinSelectorBottom.forEach((selector) => {
      selector.classList.remove("active-carousel-selector");
    });
    coin.classList.add("active-carousel-selector");
    moveBottomContainer(bottomCarouselContainer, coin);
  });
});

function moveTopContainer(container, selected) {
  const indexCoin = topCoinArray.indexOf(selected);
  const movement = indexCoin * 25;
  container.style.transform = `translateX(-${movement}%)`;
}

function moveBottomContainer(container, selected) {
  const indexCoin = bottomCoinArray.indexOf(selected);
  const movement = indexCoin * 25;
  container.style.transform = `translateX(-${movement}%)`;
}

const parallaxBitcoin = document.querySelectorAll(".parallax-bitcoin");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallaxBitcoin.forEach((divider) => {
    divider.style.backgroundPositionY = `${offset * 0.8}px`;
  });
});

// HIGHLIGHTING ANC CHANGING TEXT ----------------

const changingWordArray = [
  "LEARN",
  "CODE",
  "READ",
  "DEVELOP",
  "WRITE",
  "BUILD",
  "PROGRAM",
  "RESEARCH",
];
let changingTextContainer = document.querySelector(
  ".education-hero__changing-text"
);

let newWordIdx = 0;

function highlightThatPlease() {
  let changingTextOrig = document.querySelector(
    ".education-hero__changing-text"
  ).innerText;
  let inComingText = "";
  let lastLetterUsed = "";
  let changingTextWord = changingWordArray[newWordIdx];
  let newIdx = changingTextWord.length - 1;

  const typerwriterAnimation = '<span class="typewrite-writer">|</span>';

  // THIS HIGHLIGHTS THE CURRENT WORD --------------------------
  const intervalHighlight = setInterval(() => {
    if (newIdx >= 0) {
      inComingText = `<span class="education-highlight">${changingTextOrig[newIdx]}</span>${lastLetterUsed}`;
      lastLetterUsed = inComingText;
      changingTextContainer.innerHTML = `${changingTextOrig.slice(
        0,
        newIdx
      )}${inComingText}`;
      changingTextContainer.lastElementChild.style.marginRight = "46px";
      newIdx--;
      return;
    }

    // GETS NEW WORD FROM WORD ARRAY -----
    newWordIdx++;
    // CHECK FOR INTERVAL
    if (newWordIdx >= 8) {
      newWordIdx = 0;
    }

    changingTextWord = changingWordArray[newWordIdx]; // NEW WORD TO CHANGE TO
    newIdx = changingTextWord.length - 1; // NEW LENGTH
    // CEAR INTERVAL
    clearInterval(intervalHighlight);

    // PUT THIS IS A SETTIMEOUT --------------
    setTimeout(() => {
      // REMOVE HIGHLIGHT NEW WORD
      lastLetterUsed = "";
      let enterNewWordIdx = 0;

      const insertNewWord = setInterval(() => {
        if (enterNewWordIdx <= newIdx + 1) {
          // CHECKS FOR LAST LETTER AND CLEARS HIGHLIGHT
          if (enterNewWordIdx > newIdx) {
            changingTextContainer.lastElementChild.previousSibling.classList.remove(
              "education-highlight"
            );
            changingTextContainer.lastElementChild.style.marginLeft = "20px";
            clearInterval(insertNewWord);
            return;
          }
          changingTextContainer.innerHTML = `${lastLetterUsed}<span class="education-highlight">${changingTextWord[enterNewWordIdx]}</span>${typerwriterAnimation}`;
          lastLetterUsed += `<span class="">${changingTextWord[enterNewWordIdx]}</span>`;
          enterNewWordIdx++;
        }
      }, 100);
    }, 250);
  }, 50); //
}

setTimeout(() => {
  setInterval(highlightThatPlease, 2500);
}, 0);
