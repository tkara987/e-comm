const holographicElement = document.getElementById("holographic");

function updateHolographicBackground(value) {
  const percentage = value * 100;
  holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
  const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
  const value = z / 360;
  updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);