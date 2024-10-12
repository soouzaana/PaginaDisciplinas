const button = document.querySelector("#adicionar");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog .close");

button.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

buttonClose.addEventListener('click', () => {
  modal.setAttribute('closing', 'true');
  setTimeout(() => {
    modal.close();
    modal.removeAttribute('closing'); 
  }, 500);
});