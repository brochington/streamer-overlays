import rough from '../../shared/js/rough.esm.js';

const testCanvas = document.getElementById('test-canvas');
const videoRC = rough.canvas(testCanvas);
const ctx = testCanvas.getContext('2d');

const socialHandleCanvas = document.getElementById("social-info-bgd");
const socialRC = rough.canvas(socialHandleCanvas);
const socialCTX = socialHandleCanvas.getContext('2d');

function render() {
  // Video squiggles
  ctx.clearRect(0, 0, 800, 600);
  videoRC.rectangle(10, 10, 375, 295, {
    // stroke: 'teal',
    stroke: "white",
    strokeWidth: 5,
    roughness: 4,
  });


  // Twitter squiggles
  socialCTX.clearRect(0, 0, 330, 80);
  socialRC.rectangle(4, 4, 322, 72, {
    stroke: "white",
    strokeWidth: 1.2,
    fill: "#1DA1F2",
    // fillStyle: "solid",
    fillStyle: "zigzag",
    fillWeight: 3,
  });

  window.setTimeout(() => {
    window.requestAnimationFrame(render);
  }, 200)
}

render();