document.addEventListener('DOMContentLoaded',(e)=>{
      e.preventDefault();
    let form=document.forms
    let todoInput_el=document.querySelector(".todo-value");
    let todoDisplay=document.querySelector("todo-display")
    

    let addTodoForm=form["todo-form"]

    
    console.log(todoInput_el,form,addTodoForm)

   
      
        //capturing the input of the todo
        todoInput_el.addEventListener('keydown',(e)=>{
            // console.log(todoInput_el.value)
            if(e.key==='Enter'){
               
            let todoContent=(todoInput_el.value);
                //create the elements
            let todoWrapper=document.createElement("div")
            let checkbox=document.createElement("input")
            checkbox.type="checkbox"
            checkbox.name=name
            // checkbox.value=value

            let label=document.createElement('label')
            label.for="todo"


            label.textContent=todoContent
            console.log(todoContent);

            //add class names to the elements 

            textContent.classList.add('todo');
            checkbox.classList.add('checked');
            todoWrapper.classList.add('.todo-item-wrapper');
            
            //appending
            todoWrapper.appendChild(textContent);
            todoWrapper.appendChild(label);
            todoDisplay.appendChild(todoWrapper);
             
            //marked complete

            checkbox.addEventListener('click',(e)=>{
                if(e.target.className=="checked")
                label.classList.toggle('.completed')

            })
           


            }

        })

        

    // })

    function captureInput(value){
        todoInput_el.addEventListener('keydown',(e)=>{
            if(e.key==='Enter'){
                // handleTodo(value)
                console.log(todoInput_el.value)
            }
        })
       

    }

})