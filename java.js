

let mission = document.getElementById("mission");
let addBtn = document.getElementById("addBtn");
let missionList = document.getElementById("missionList");
let count = document.getElementById("count");
let colorBtn = document.getElementById("colorBtn");

function addMission() {
    let task = mission.value.trim();


    if (task == "") {
        alert("Please enter a mission");
        return;
    }

    let li = document.createElement("li");

    let text = document.createElement("span");
    text.textContent = task;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";

    completeBtn.onclick = function () {
        text.classList.toggle("completed");
    };
    function updateCount() {
    count.textContent = missionList.children.length;
}


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
        updateCount()
    };

    li.appendChild(text);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    missionList.appendChild(li);

    mission.value = "";
    updateCount();
}


    addBtn.onclick = addMission;


colorBtn.onclick = function () {
    if (document.body.style.backgroundColor == "lightblue") {
        document.body.style.backgroundColor = "pink";
    } else if (document.body.style.backgroundColor == "pink") 
        {
        document.body.style.backgroundColor = "lightyellow";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
};
