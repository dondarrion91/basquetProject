import miau from "../views/miau/miau.html";
import about from "../views/about/about.html";

export const PATHS = {
  home: {
    path: "/",
    template: `<h1>🏠 Home</h1>`,
  },
  about: {
    path: "/about",
    template: about,
  },
  contact: {
    path: "/contact",
    template: `<h1>📱 Contacto</h1>`,
  },
  miau: {
    path: "/miau",
    template: miau,
  },
};
