import { createELement } from "./utilies.js";

const showRulesSection = ()=>{
    document.getElementById('rules').classList.remove('d-none');
}
const hideRulesSection = ()=>{
    document.getElementById('rules').classList.add('d-none');
}
const appendRulesController=()=>{
    const controllerBtn = createELement({
        tagName:'button',
        classList:['btn', 'bg-transparent', 'border', 'border-2', 'border-white', 'rounded-4', 'px-5', 'f-weight-bold', 'text-white', 'fs-4'],
        customAttributes:new Map(Object.entries({id:"rulesBtn"})),
        innerHTML:'RULES'
    });
    controllerBtn.addEventListener('click',showRulesSection);
    const parentDiv = createELement({
        tagName:'div',
        classList:['rules-button', 'text-md-end', 'text-center', 'px-4', 'py-4'],
        children:[controllerBtn]
    });
    document.getElementById('root').append(parentDiv);
}
export{
    showRulesSection,
    hideRulesSection,
    appendRulesController
}