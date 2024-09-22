import { createELement,clear } from "./utilies.js";
import {appendRulesController} from './rules.js'
import { createCustomeIcon, createCustomeIconContainer } from "./icons.utilis.js";
import { displayScore } from "./results.js";
const initApp =()=>{
    displayScore();
    clear();
    const scissorsIcon = createCustomeIcon({
        iconClasses:['fa-hand-scissors', 'fa-3x'],
        borderClasses:['scissors-border'],
        iconId:'scissors'


    });
    const scissorsContainer = createCustomeIconContainer({
        containerClasses:['justify-content-center','scissors-content'],
        children:[scissorsIcon]
    });
    const spockIcon = createCustomeIcon({
        iconClasses:['fa-hand-spock', 'fa-3x'],
        borderClasses:['spock-border'],
        iconId:'spock'
    });
    const paperIcon = createCustomeIcon({
        iconClasses:['fa-hand-paper', 'fa-3x'],
        borderClasses:['paper-border'],
        iconId:'paper'
    });
    const spockPaperContainer = createCustomeIconContainer({
        containerClasses:['spock-paper-content', 'justify-content-between'],
        children:[spockIcon,paperIcon]
    });
    const lizardIcon = createCustomeIcon({
        iconClasses:['fa-hand-lizard', 'fa-3x'],
        borderClasses:['lizard-border'],
        iconId:'lizard'
    });
    const rockIcon = createCustomeIcon({
        iconClasses:['fa-hand-rock', 'fa-3x'],
        borderClasses:['rock-border'],
        iconId:'rock'
    });
    const lizardRockContainer = createCustomeIconContainer({
        containerClasses:['lizard-rock-content', 'justify-content-around'],
        children:[lizardIcon,rockIcon]
    });
    const bgImg = createELement({
        tagName:'img',
        customAttributes:new Map(Object.entries({
            src:'./assets/images/bg-pentagon.svg',
            alt:'background image',
        })),
        classList:['position-absolute',  'w-100', 'h-100', 'z-n1']
    });
    const choiceContent = createELement({
        tagName:'div',
        classList:['choice-content', 'w-25', 'mx-auto', 'px-sm-3', 'px-0', 'position-relative'],
        children:[bgImg,scissorsContainer,spockPaperContainer,lizardRockContainer]

    });
    const choiceSection = createELement({
        tagName:'section',
        classList:['choice', 'py-5'],
        children:[choiceContent],
        customAttributes:new Map(Object.entries({id:'choice'}))
    });
    document.getElementById('root').prepend(choiceSection);
    appendRulesController();
}
export{
    initApp
}