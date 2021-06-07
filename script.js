const certifiContents = document.querySelector("#certifiContents");
const introContents = document.querySelector("#introContents");
const interviewContents = document.querySelector("#interviewContents");
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
