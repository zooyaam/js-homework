/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const ul = getNode("ul");
const visualImg = getNode(".visual img");
const body = getNode("body");
const h1 = getNode("h1");

function handleClick(e) {
  e.preventDefault(); // 흠

  let target = e.target;
  let li = target.closest("li");
  let index = li.dataset.index;

  if (!li) return;

  const list = Array.from(ul.children); // nav >> ul 변경
  list.forEach((li) => li.classList.remove("is-active")); // 제거가 안됨

  li.classList.add("is-active");

  // 대표 이미지 및 이미지 설명 변경
  visualImg.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImg.alt = data[index - 1].alt;

  // 배경색 변경
  if (visualImg.alt === `${data[index - 1].alt}`)
    body.style.background = `linear-gradient(to bottom, ${
      data[index - 1].color[0]
    }, ${data[index - 1].color[1]})`;

  // 텍스트 변경
  if (visualImg.alt === `${data[index - 1].alt}`)
    h1.innerHTML = `${data[index - 1].name}`;
}

// 이벤트 호출
nav.addEventListener("click", handleClick);
