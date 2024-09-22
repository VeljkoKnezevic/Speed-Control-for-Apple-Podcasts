const audio = document.getElementById("apple-music-player");

if (audio) audio.playbackRate = 2;

function addSpeedControls() {
  const container = document.getElementsByClassName("right-content")[0];

  const button = document.createElement("button");
  button.innerText = "Click Me";
  button.style.padding = "10px";
  button.style.margin = "300px";
  button.style.backgroundColor = "#0078d7";
  button.style.color = "#fff";
  button.style.border = "5px solid red";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    audio.playbackRate = 0.5;
  });

  if (container) container.appendChild(button);

  console.log(container.children);
}

addSpeedControls();
