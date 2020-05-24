const config = {
  variables: {},
  colors: {
    "dark-blue": "#001426",
    "dark-teal": "#014059",
    teal: "#02738C",
    "slate-gray": "#788C8C",
    white: "#F7F7F7",
    black: "#0C0C0C",
  },
  fonts: [
    {
      url: "https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap",
      name: 'Gochi Hand',
      key: 'gochi-hand'
    },
  ],
  mediaQueries: {
    su: "screen and (min-width: 1rem)",
    so: "screen and (max-width: 39.9375rem)",
    mu: "screen and (min-width: 40rem)",
    mo: "screen and (min-width: 40rem) and (max-width: 63.9375rem)",
    lu: "screen and (min-width: 64rem)",
    lo: "screen and (min-width: 64rem) and (max-width: 74.9375rem)",
  },
  body: {
    color: "var(--teal)",
    backgroundColor: "transparent",
    fontFamily: "var(--gochi-hand)",
  },
  headings: [
    {
      key: "main-heading",
      size: "20px",
      style: "var(--pt-sans)",
      color: "var(--teal)",
      weight: "bold",
    },
  ],
  margins: {
    "0": "0px",
    "1": ".25rem",
    "2": ".5rem",
    "3": "1rem",
    "4": "1.5rem",
    "5": "2rem",
    "6": "2.5rem",
    "7": "3rem",
    "8": "4rem",
    "9": "5rem",
  },
  paddings: {
    "0": "0px",
    "1": ".25rem",
    "2": ".5rem",
    "3": "1rem",
    "4": "1.5rem",
    "5": "2rem",
    "6": "2.5rem",
    "7": "3rem",
    "8": "4rem",
    "9": "5rem",
  },
  borders: [
    {
      key: "1",
      style: "solid",
      color: "var(--teal)",
      width: "1px",
      radius: "3px",
    },
  ],
  widths: {
    s1: "1rem",
  },
  heights: {
    s1: "1rem",
  },
};

module.exports = {
  path: "overlays/basic-overlay-1/css",
  filename: "horizon-styles.css",
  docPath: "docs/styles/site",
  config,
};
