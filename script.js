const careerContents = document.querySelector("#careerContents");
const certifiContents = document.querySelector("#certifiContents");
const introContents = document.querySelector("#introContents");
const interviewContents = document.querySelector("#interviewContents");
const browseBtn = document.querySelector("#browse-btn");
const realInput = document.querySelector("#real-input");

let careerNumber = 0;
let certifiNumber = 0;
let introNumber = 0;
let interviewNumber = 0;

const textIntroCount = (number) => {
  document.querySelector(
    ".introCount" + "_" + number
  ).innerHTML = document.querySelector(".intro" + "_" + number).value.length;
};

const textInterviewCount = (number) => {
  document.querySelector(
    ".interviewCount" + "_" + number
  ).innerHTML = document.querySelector(
    ".interview" + "_" + number
  ).value.length;
};

const deleteCareerList = (className) => {
  document.querySelector(`.careerArea_${className}`).innerHTML = "";
};

const deleteCertifiList = (className) => {
  document.querySelector(`.certifiArea_${className}`).innerHTML = "";
};

const deleteIntroList = (className) => {
  document.querySelector(`.introArea_${className}`).innerHTML = "";
};

const deleteInterviewList = (className) => {
  document.querySelector(`.interviewArea_${className}`).innerHTML = "";
};

const handleAddCareer = () => {
  let div = document.createElement("div");
  careerNumber += 1;
  div.innerHTML = `
     <div class="careerHead">
      <input class="certifiHead_text" type="text" placeholder="제목"/>
     </div>
     <textarea class="certifiText certifi_${careerNumber}"></textarea>
     <div>
     <button class="deleteButton" onclick="deleteCareerList(${careerNumber})">삭제</button>
     </div>
  `;
  div.classList.add("careerArea");
  div.classList.add(`careerArea_${careerNumber}`);
  careerContents.appendChild(div);
};

const handleAddCertifi = () => {
  let div = document.createElement("div");
  certifiNumber += 1;
  div.innerHTML = `
  
     <div class="certifiHead">
      <input class="certifiHead_text" type="text" placeholder="제목"/>
     </div>
      <textarea class="certifiText certifi_${certifiNumber}"></textarea>
      <div>
      <button class="deleteButton" onclick="deleteCertifiList(${certifiNumber})">삭제</button>
      </div>
  `;
  div.classList.add("certifiArea");
  div.classList.add(`certifiArea_${certifiNumber}`);
  certifiContents.appendChild(div);
};

const handleAddIntro = () => {
  let div = document.createElement("div");
  introNumber += 1;
  div.innerHTML = `
     <div>
      <input class="introHead_text" type="text" placeholder="제목"/>
     </div>
      <textarea class="introText intro_${introNumber}" onkeyup="textIntroCount(${introNumber})">
      </textarea>
      <div class="introCount_${introNumber}">0</div>
      <button class="deleteButton" onclick="deleteIntroList(${introNumber})">삭제</button>
      
  `;
  div.classList.add("introArea");
  div.classList.add(`introArea_${introNumber}`);
  introContents.appendChild(div);
};

const handleAddInterview = () => {
  let div = document.createElement("div");
  interviewNumber += 1;
  div.innerHTML = `
     <div>
      <input class="interviewHead_text" type="text" placeholder="제목"/>
     </div>
      <textarea class="interviewText interview_${interviewNumber}" onkeyup="textInterviewCount(${interviewNumber})"></textarea>
      <div class="interviewCount_${interviewNumber}">0</div>
      <button class="deleteButton" onclick="deleteInterviewList(${interviewNumber})">삭제</button>
  `;
  div.classList.add("interviewArea");
  div.classList.add(`interviewArea_${interviewNumber}`);
  interviewContents.appendChild(div);
};

browseBtn.addEventListener("click", () => {
  realInput.click();
});

function readInputFile(e) {
  let sel_files = [];

  sel_files = [];
  $("#imagePreview").empty();

  let files = e.target.files;
  let fileArr = Array.prototype.slice.call(files);
  let index = 0;

  fileArr.forEach(function (f) {
    if (!f.type.match("image/.*")) {
      alert("이미지 확장자만 업로드 가능합니다.");
      return;
    }
    if (files.length < 11) {
      sel_files.push(f);
      let reader = new FileReader();
      reader.onload = function (e) {
        let html = `<a id="photoArea id_${index}"><img id="photo" src=${e.target.result} data-file=${f.name} /></a>`;
        document.querySelector("#imagePreview").innerHTML = html;
        index++;
      };
      reader.readAsDataURL(f);
    }
  });
  if (files.length > 11) {
    alert("최대 10장까지 업로드 할 수 있습니다.");
  }
}

realInput.addEventListener("change", readInputFile);

let printDiv;
let initBody;
let hiddenPhotoBtn;
let hiddenAddButton;
let hiddenDeleteButton;
let hiddenPrintButton;
function printPage() {
  initbody = document.body;
  hiddenPhotoBtn = document.querySelector("#browse-btn");
  hiddenAddButton = document.querySelectorAll(".addButton");
  hiddenDeleteButton = document.querySelectorAll(".deleteButton");
  hiddenPrintButton = document.querySelector("#print");
  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
  setTimeout(function () {
    window.print();
  }, 500);
}

function beforePrint() {
  for (let el of hiddenAddButton) {
    el.style.display = "none";
  }
  for (let el of hiddenDeleteButton) {
    el.style.display = "none";
  }
  hiddenPhotoBtn.style.display = "none";
  hiddenPrintButton.style.display = "none";
  document.body = document.getElementById("resumeWrap").innerHTML;
}

function afterPrint() {
  for (let el of hiddenAddButton) {
    el.style.display = "block";
  }
  for (let el of hiddenDeleteButton) {
    el.style.display = "block";
  }
  hiddenPhotoBtn.style.display = "block";
  hiddenPrintButton.style.display = "block";
  document.body = initBody;
}
