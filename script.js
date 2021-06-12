const certifiContents = document.querySelector("#certifiContents");
const introContents = document.querySelector("#introContents");
const interviewContents = document.querySelector("#interviewContents");
const browseBtn = document.querySelector(".browse-btn");
const realInput = document.querySelector("#real-input");

let certifiNumber = 0;
let introNumber = 0;
let interviewNumber = 0;

const textCount = () => {
  document.querySelector(".count").innerHTML = document.querySelector(
    ".certifiText"
  ).value.length;
  console.log(document.querySelector(".certifiText").value.length);
};

const handleAddCertifi = () => {
  let div = document.createElement("div");
  certifiNumber += 1;
  div.innerHTML = `
     <div>
     <span class="certifiNumber">${certifiNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <textarea class="certifiText" onkeyup="textCount()" ></textarea>
      <div class="count">0</div>
  `;
  div.classList.add("certifiContent");
  certifiContents.appendChild(div);
};

const handleAddIntro = () => {
  let div = document.createElement("div");
  introNumber += 1;
  div.innerHTML = `
     <div>
     <span class="certifiNumber">${introNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <textarea class="introText" >
      </textarea>
      <div class="count">0</div>
      
  `;
  div.classList.add("introContent");
  introContents.appendChild(div);
};

const handleAddInterview = () => {
  let div = document.createElement("div");
  interviewNumber += 1;
  div.innerHTML = `
     <div>
     <span class="interviewNumber">${interviewNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <input type="textarea" class="interviewText"/>
      <div class="count">0</div>
  `;
  div.classList.add("interviewContent");
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

$("#real-input").on("change", readInputFile);
