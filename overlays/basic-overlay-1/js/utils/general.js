export function getRandoString(length = 10) {
  return [...Array(length)]
    .map((i) => (~~(Math.random() * 36)).toString(36))
    .join("");
}

export function wait(time = 2000) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, time);
  });
}