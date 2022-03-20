export const doMeow = () => {
  alert("Meow");
};

window.methods = {
  ...window.methods,
  doMeow,
};
