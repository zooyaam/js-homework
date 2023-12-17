// DOM 요소 가져오기
const nav = getNode(".nav");
const ul = getNode("ul");
const visualImg = getNode(".visual img");
const body = getNode("body");
const h1 = getNode("h1");

// 클릭 이벤트 함수
function handleClick(e) {
  e.preventDefault();

  let target = e.target;
  let li = target.closest("li");

  if (!li) return;

  let index = li.dataset.index;

  const list = Array.from(ul.children);
  list.forEach((li) => li.classList.remove("is-active"));

  li.classList.add("is-active");

  setBgColor(index);
  setImage(index);
  setNameText(index);
}

// 배경색 변경
function setBgColor(index) {
  // if (visualImg.alt === `${data[index - 1].alt}`)
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;
}

// 대표 이미지 변경
function setImage(index) {
  visualImg.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImg.alt = data[index - 1].alt;
}

// 대표 이미지 텍스트 변경
function setNameText(index) {
  // if (visualImg.alt === `${data[index - 1].alt}`)
  h1.innerHTML = `${data[index - 1].name}`;
}

// 이벤트 호출
nav.addEventListener("click", handleClick);
