const quiz = document.querySelectorAll(".choices")
const submit = document.querySelector(".submit")
const answers = [1,0,2,1,1,2,0]
const exlamation = document.querySelectorAll(".title i")
const tryAgain = document.querySelector(".tryagain")
const score = document.querySelector(".score")
const scoretext = document.querySelector(".score span")


let correct=0;

console.log(quiz)
// choices.forEach((choice)=>{
//     choice.addEventListener('click',()=>{
//         choice.classList.toggle("selected")
//     })
// })

for(let k=0;k<quiz.length;k++){
   const choix = quiz[k].querySelectorAll("li")
   for(let i=0;i<choix.length;i++){
       choix[i].addEventListener('click',()=>{
           choix[i].classList.toggle("selected")
           for(let j=0;j<choix.length;j++){
               if(j!=i) choix[j].classList.remove("selected")
           }
       })
   }
}

submit.addEventListener('click',()=>{
    window.scrollTo({top:0 })
    for(let i=0;i<quiz.length;i++){
        const choix = quiz[i].querySelectorAll("li")
        if(selected(i,choix)!=-1 && i==selected(i,choix)) {choix[i].classList.add("correct"); correct++}
        else if(selected(i,choix)!=-1) choix[selected(i,choix)].classList.add("incorrect")
        else {
            exlamation[i].classList.add("notfound")
            
        }
    }
    tryAgain.classList.add("show")
    submit.style.display = 'none'
    scoretext.textContent = `${correct} / ${quiz.length}`
    score.style.display = 'block'
    quiz.forEach((q)=>{q.classList.add("stopChoosing")})

})

function selected(i,list){
    for(let i=0;i<list.length;i++){
        if(list[i].classList.contains("selected")) return i
    }
    return -1
}
tryAgain.addEventListener('click',()=>{
    location.reload()
    window.scrollTo({top:0 })

})






