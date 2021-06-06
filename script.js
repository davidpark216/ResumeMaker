const certifiContents = document.querySelector("#certifiContents");
const introContents = document.querySelector("#introContents");
const interviewContents = document.querySelector("#interviewContents");
let certifiNumber = 0;
let introNumber = 0;
let interviewNumber = 0;

const handleAddCertifi = () => {
  let div = document.createElement("div");
  certifiNumber += 1;
  div.innerHTML = `<div class="certifiContent">
     <div>
     <span class="certifiNumber">${certifiNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <input type="textarea" class="certifiText"/>
  <div>`;

  certifiContents.appendChild(div);
};

const handleAddIntro = () => {
  let div = document.createElement("div");
  introNumber += 1;
  div.innerHTML = `<div class="introContent">
     <div>
     <span class="certifiNumber">${introNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <input type="textarea" class="introText"/>
  <div>`;

  introContents.appendChild(div);
};

const handleAddInterview = () => {
  let div = document.createElement("div");
  interviewNumber += 1;
  div.innerHTML = `<div class="interviewContent">
     <div>
     <span class="interviewNumber">${interviewNumber}</span>
     <span>. </span>
      <input type="text"/>
     </div>
      <input type="textarea" class="interviewText"/>
  <div>`;

  interviewContents.appendChild(div);
};
