const createELement = ({tagName,classList=[],children=[],customAttributes,innerHTML}={})=>{
    const element = document.createElement(tagName);
    if(classList&&classList.length){
        element.classList.add(...classList);
    }
    if(children&&children.length){
        element.append(...children);
    }
    if(customAttributes){
        for (const [key,value] of customAttributes) {
            element.setAttribute(key,value);      
        }
    }if(innerHTML){
        element.innerHTML=innerHTML;
    }
    return element;
}
const handlePropagation = (e)=>{
    e.stopPropagation();
}
const clear=()=>{
    document.getElementById('root').innerHTML='';
}
export{
    createELement,
    handlePropagation,
    clear
}