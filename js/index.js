import { initApp } from "./app.js";
import { hideRulesSection } from "./rules.js";
import { handlePropagation } from "./utilies.js";
initApp();
document.getElementById('rules').addEventListener('click',hideRulesSection);
document.getElementById('rulesContent').addEventListener('click',handlePropagation);
document.getElementById('closeRulesBtn').addEventListener('click',hideRulesSection);