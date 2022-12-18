export function hoverChangeDescription(nameCard, text) {
    var changeDescription = document.querySelector(".changeDescription");
  
    document.querySelector(nameCard).addEventListener("mouseover", () => {
      changeDescription.innerHTML = text;
    });
  
    document.querySelector(nameCard).addEventListener("mouseout", () => {
      changeDescription.innerHTML = `<p style="font-style:italic">Para saber mais, passe o cursor do mouse sobre os ícones.</p>`;
    });
  }