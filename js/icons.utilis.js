import { displayUserResults } from "./results.js";
import { createELement } from "./utilies.js";

const createDivIconWithBorder = ({borderIconDiv,icon,iconId}={})=>{
    const iconElement = createELement({...icon});
    const divIconElement = createELement({tagName:'div',classList:['icon-div'],children:[iconElement]});
    const borderIconElement = createELement({...borderIconDiv,children:[divIconElement],customAttributes:new Map(Object.entries({id:iconId??''}))});
    if(iconId){
        borderIconElement.addEventListener('click',()=>{
            displayUserResults(borderIconElement.getAttribute('id'))
        });
    }
    return borderIconElement;
}
const createCustomeIcon = ({iconClasses=[],borderClasses=[],iconId=''}={})=>{
        const icon = {
            tagName:'i',
            classList:['fas'].concat(iconClasses)
        }
        const borderIconDiv = {
            tagName:'div',
            classList:['div-icon-border', 'd-flex', 'justify-content-center', 'align-items-center'].concat(borderClasses)
        }
        return createDivIconWithBorder({icon,borderIconDiv,iconId});
}
const createCustomeIconContainer= ({containerClasses=[],children=[]}={})=>{
    const containerIconDiv =createELement({
        tagName:'div',
        classList:['d-flex', 'align-items-center', 'py-2', 'py-sm-4'].concat(containerClasses),
        children
    });
    return containerIconDiv;
}
export{
    createCustomeIcon,
    createCustomeIconContainer
}