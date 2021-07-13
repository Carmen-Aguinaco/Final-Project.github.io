// Get the modal
var mainModal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img-1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-2");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-3");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-4");
var modalImg = document.getElementById("img04");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-5");
var modalImg = document.getElementById("img05");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-6");
var modalImg = document.getElementById("img06");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-7");
var modalImg = document.getElementById("img07");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-8");
var modalImg = document.getElementById("img08");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-9");
var modalImg = document.getElementById("img09");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-10");
var modalImg = document.getElementById("img10");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-11");
var modalImg = document.getElementById("img11");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-12");
var modalImg = document.getElementById("img12");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-13");
var modalImg = document.getElementById("img13");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img = document.getElementById("img-14");
var modalImg = document.getElementById("img14");
img.onclick = function(){
  mainModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mainModal.style.display = "none";
}

// About Me Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const aboutMeModal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.about-me-modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalOne = button.closest('.about-me-modal')
    closeModal(modalOne)
  })
})

function openModal(modalOne) {
  if (modalOne == null) return
  modalOne.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modalOne) {
  if (modalOne == null) return
  modalOne.classList.remove('active')
  overlay.classList.remove('active')
}


