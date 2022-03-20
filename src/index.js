import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

// Router
import { PATHS } from "./routes/routes";
import { Router } from "./routes/router";

// scripts
import "./views/miau/miau";
import "./views/about/about";

const ROUTER = new Router(PATHS);

window.ROUTER = ROUTER;
