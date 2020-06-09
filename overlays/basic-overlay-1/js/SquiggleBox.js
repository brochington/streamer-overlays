import rough from "../../shared/js/rough.esm.js";

export default class SquiggleBox {
  _width = 300;
  _height = 400;
  _stroke = "white";
  _strokeWidth = 5;
  _roughness = 4;
  _padding = 10;
  _fill = null;
  _fillStyle = null;
  _fillWeight = null;
  _running = false;

  constructor(width, height, container) {
    // container.style.position = "relative";

    this.canvas = document.createElement("canvas");
    this.canvas.id = "squiggle-1";
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.position = "absolute";

    container.prepend(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.rc = rough.canvas(this.canvas);

    this.width = width;
    this.height = height;
  }

  stroke(nextStroke) {
    this._stroke = nextStroke;
    return this;
  }

  strokeWidth(nextStrokeWidth) {
    this._strokeWidth = nextStrokeWidth;
    return this;
  }

  roughness(nextRoughness) {
    this._roughness = nextRoughness;
    return this;
  }

  padding(nextPadding) {
    this._padding = nextPadding;
    return this;
  }

  fill(nextFill) {
    this._fill = nextFill;
    return this;
  }

  fillStyle(nextFillStyle) {
    this._fillStyle = nextFillStyle;
    return this;
  }

  fillWeight(nextFillWeight) {
    this._fillWeight = nextFillWeight;
    return this;
  }

  render = () => {
    if (!this._running) {
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    const options = {
      stroke: this._stroke,
      strokeWidth: this._strokeWidth,
      roughness: this._roughness,
      ...(this._fill !== null ? { fill: this._fill } : {}),
      ...(this._fillStyle !== null ? { fillStyle: this._fillStyle } : {}),
      ...(this._fillWeight !== null ? { fillWeight: this._fillWeight } : {}),
    };

    this.rc.rectangle(
      this._padding,
      this._padding,
      this.width - this._padding * 2,
      this.height - this._padding * 2,
      options
    );

    window.setTimeout(() => {
      window.requestAnimationFrame(this.render);
    }, 200);
  }

  start() {
    this._running = true;

    this.render();
  }

  stop() {
    this._running = false;
  }
}
