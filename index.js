const inputBox = document.querySelector('#inputbox'); // Correct ID with lowercase 'b'
const listContainer = document.querySelector('.lists ul'); // Target the <ul> inside .lists

getItem()

function addTask() {
    if (inputBox.value === "") {  // Check if the input value is empty
        alert("Beta Kuch Likh Le");
    } else {
        let list = document.createElement('li');
        list.className = "list-none font-[17px] p-[10px] select-none cursor-pointer bofore-list relative flex justify-between  list-item"; // Add the class names
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let deltee = document.createElement('span');
        deltee.innerHTML = '\u00d7';
        deltee.classList.add('absolute', 'right-[-20px]', 'top-[-10px]', 'w-[40px]', 'h-[40px]', 'font-[700]','text-[40px]','text-red-400', 'text-[#555]','text-center','rounded-full','pl-[20px]')
        list.appendChild(deltee);


        inputBox.value = "";  // Clear the input box after adding the task
        saveData()
    }
}

listContainer.addEventListener('click',(e)=>{

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

})


function saveData(){

    localStorage.setItem("list",listContainer.innerHTML);

}

function getItem(){
    listContainer.innerHTML = localStorage.getItem("list")
}