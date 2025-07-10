const okBtn = document.getElementById("okBtn");
const textBar = document.getElementById("textBar");
const listBox = document.getElementById("listBox");


okBtn.addEventListener("click",()=>{
    //input text
    const inputText = textBar.value.trim();
    if(inputText == "") return;

    const li = document.createElement("li");
    
    //span-input text
    const span = document.createElement("span");
    span.textContent = inputText;
    span.addEventListener("click",()=>{
        span.classList.toggle("completed");
    })

    //Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = ()=>{
        const newText = prompt("Edit task: ",inputText.textContent);
        if(newText !== null && newText !== ""){
            span.textContent = newText.trim();
        }
    };

    //delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = ()=>{
        li.remove();
    }

    //Append
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    listBox.appendChild(li);
    textBar.value = "";
})