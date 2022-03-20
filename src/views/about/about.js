export const onInput = (event) => {
  console.log(event.target.value);
};

window.methods = {
  ...window.methods,
  onInput,
};
