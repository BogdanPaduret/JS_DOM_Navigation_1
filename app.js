let inputVal=document.querySelector(".input.value");
let inputBtn=document.querySelector(".input.button");
let list=document.querySelector(".list");




inputBtn.addEventListener("click", () =>{
    addToList(list, inputVal);
})



inputVal.addEventListener("keydown", (e)=>{
    if(e.key=="Enter"){
        addToList(list, inputVal);
    }
})



list.addEventListener("click", (e)=>{

    let ob=e.target;
    let parentArticle=ob.closest(".list-element");
    let icon=ob.closest(".icon")


    if(icon!=null){
        let iconClasses=icon.className.split(" ");

        if(iconClasses[0]=="delete"){
            // console.log("DELETE ITEM!");
            removeItem(list,parentArticle);
        }
        if(iconClasses[0]=="arrow"){
            if(iconClasses[1]=="up"){
                // console.log("MOVE UP!");
                moveItemUp(parentArticle);
            }
            if(iconClasses[1]=="down"){
                // console.log("MOVE DOWN!");
                moveItemDown(parentArticle);
            }
        }
    }
    

    // console.log(icon);
})