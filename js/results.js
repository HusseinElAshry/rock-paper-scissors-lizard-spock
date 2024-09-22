import { initApp } from "./app.js";
import { createCustomeIcon } from "./icons.utilis.js";
import { appendRulesController } from "./rules.js";
import { clear, createELement } from "./utilies.js";
const displayUserResults=(iconId)=>{
    const probabilities = ['scissors','paper','rock','lizard','spock']
    const randomChoice = Math.round((Math.random())*4);
    const userChoice = createChoiceContainer({
        paragraph:'YOU PICKED',
        choiceIconDiv:createCustomeIcon({
            iconClasses:['fa-5x',`fa-hand-${iconId}`],
            borderClasses:[`${iconId}-border`,'translate-0'],
        })
    });
    const emptyDiv= createChoiceContainer({
        paragraph:'THE HOUSE PICKED'
    });
    const containerDiv = createELement({
        tagName:'div',
        classList:['d-flex', 'justify-content-center', 'align-items-start', 'flex-wrap',  'py-5'],
        children:[userChoice,emptyDiv]
    })
    const resultSection = createELement({
        tagName:'section',
        customAttributes:new Map(Object.entries({id:'results'})),
        children:[containerDiv],
        classList:['py-5','results']
    });
    clear();
    document.getElementById('root').append(resultSection);
    const houseChoice = createChoiceContainer({
        paragraph:'THE HOUSE PICKED',
        choiceIconDiv:createCustomeIcon({
            iconClasses:['fa-5x',`fa-hand-${probabilities[randomChoice]}`],
            borderClasses:[`${probabilities[randomChoice]}-border`,'translate-0'],
        })
    });
    houseChoice.classList.add('order-lg-last')
    setTimeout(()=>{
        containerDiv.removeChild(emptyDiv);
        containerDiv.append(houseChoice);
    },2000);
    setTimeout(()=>{
        const result = computeWinner({userChoice:iconId,houseChoice:probabilities[randomChoice]});
        if(result=="YOU LOSE"){
            houseChoice.querySelector('.wave-radial-gradient').classList.add('wave');
        }else if(result=="YOU WIN"){
            userChoice.querySelector('.wave-radial-gradient').classList.add('wave');
            increaseScore();
            displayScore();
        }else{
            userChoice.querySelector('.wave-radial-gradient').classList.add('wave');
            houseChoice.querySelector('.wave-radial-gradient').classList.add('wave');
        }
        containerDiv.append(appendPlayAgainSection(`${result}`));
    },2000)
    appendRulesController();
}
const appendPlayAgainSection = (result='you win')=>{
    const paragraph = createELement({
        tagName:'p',
        classList:['fs-2','f-weight-bolder','text-white'],
        innerHTML:result.toUpperCase()
    });
    const button =createELement({
        tagName:'button',
        classList:['btn','px-3' ,'py-2','bg-white','border', 'border-1','border-white','rounded-4','fs-4','letters-space-4','f-weight-bold','dark-text'],
        innerHTML:'PLAY AGAIN'
    });
    button.addEventListener('click',initApp);
    const container = createELement({
        tagName:'div',
        classList:['col-lg','col-12','text-center','align-self-center','mt-3','px-4'],
        children:[paragraph,button]
    });
    return container; 
}
const createChoiceContainer=({paragraph,choiceIconDiv}={})=>{
    const choiceParagraph = createELement({
        tagName:'p',
        classList:['text-white', 'fs-5', 'letters-space-4', 'text-center',  'f-weight-bold','mb-4'],
        innerHTML:paragraph
    });
    let choiceDiv = choiceIconDiv;
    if(!choiceDiv){
        choiceDiv = createELement({
            tagName:'div',
            classList:['empty-div'],
            customAttributes:new Map(Object.entries({id:'emptyDiv'}))
        });
    }
    const wavyDiv = createELement({
        tagName:'div',
        classList:['wave-radial-gradient'],
        children:[choiceDiv]
    });
    const choiceContainer = createELement({
        tagName:'div',
        classList:['choice-container','col-lg', 'flex-column','d-flex', 'justify-content-center', 'align-items-center', 'py-3','px-2'],
        children:[choiceParagraph,wavyDiv]
    });
    return choiceContainer;
}
const computeResult=({beatList=[],houseChoice}={})=>{
    if(beatList.includes(houseChoice)){
        return 'YOU LOSE';
    }else{
        return 'YOU WIN';
    }
}
const computeWinner=({userChoice,houseChoice}={})=>{
    if(userChoice==houseChoice){
        return 'DRAW';
    }else if(userChoice=='rock'){
        return computeResult({beatList:['hand','spock'],houseChoice});
    }else if(userChoice=='paper'){
        return computeResult({beatList:['scissors','lizard'],houseChoice});
    }else if(userChoice=='scissors'){
        return computeResult({beatList:['rock','spock'],houseChoice});
    }else if(userChoice=='lizard'){
        return computeResult({beatList:['scissors','rock'],houseChoice});
    }else if(userChoice=='spock'){
        return computeResult({beatList:['paper','lizard'],houseChoice});
    }
}
const increaseScore=()=>{
    const score = Number(localStorage.getItem('score'));
    localStorage.setItem('score',score+1);
}
const displayScore=()=>{
    const score = Number(localStorage.getItem('score'));
    document.getElementById('score').innerHTML = score;
}
export{
    displayUserResults,
    displayScore
}