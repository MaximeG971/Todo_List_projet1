const addBtn = document.getElementById("add");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnClose = document.getElementById("btnClose");
const taskForm = document.getElementById("newTask");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");

//Fenêtre Pop-up
function showPopup() {
    overlay.style.display = "block";
}

function closePopup() {
    overlay.style.display = "none";
    taskForm.reset();
}

addBtn.addEventListener("click", showPopup);

btnClose.addEventListener("click", closePopup);

taskCancel.addEventListener("click", closePopup);


//Ajout de la tâche
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = taskName.value;
    const description = taskDesc.value;
    const date = taskDate.value;
    const time = taskTime.value;

    createTask(name, description, date, time);

    closePopup();
});

function createTask(name, description, date, time) {
    const tasksSection = document.getElementById("taches");
    const prioritiesSection = document.getElementById("priorites");

    const taskArticle = document.createElement("article");
    taskArticle.classList.add("task");

    const taskNameHeader = document.createElement("h3");
    taskNameHeader.textContent = name;

    const taskDescPara = document.createElement("p");
    taskDescPara.textContent = description;

    const taskDateTimePara = document.createElement("p");
    taskDateTimePara.textContent = "Date : " + date + " Heure : " + time;

    //Priorité (Younes)
    const taskPriority = document.getElementById("taskFirst");
    if (taskPriority.checked) {
        taskArticle.classList.add('priorites');
        prioritiesSection.appendChild(taskArticle);
    } else {
        taskArticle.classList.add('taches');
        tasksSection.appendChild(taskArticle);
    }

  taskArticle.appendChild(taskNameHeader);
  taskArticle.appendChild(taskDescPara);
  taskArticle.appendChild(taskDateTimePara);
};

//Ajout de l'objectif 


//Date & Heure
function afficherDateHeure() {
    const dateElement = document.getElementById("date");
    const heureElement = document.getElementById("heure");
    const maintenant = new Date(); // Obtenir la date et l'heure actuelles
    
    // Obtenir la date au format "jour mois année"
    const dateTexte = maintenant.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    // Obtenir l'heure au format "hh:mm:ss"
    const heureTexte = maintenant.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  
    dateElement.textContent = dateTexte;
    heureElement.textContent = heureTexte;
  }
  
  // Mettre à jour l'heure et la date toutes les secondes
  setInterval(afficherDateHeure, 1000);
  
  // Afficher la date et l'heure dès le chargement de la page
  afficherDateHeure();

  // Light & Dark Mode

  const changeThemeBtn = document.querySelector('.icone');
let toggleTheme = 0;
changeThemeBtn.addEventListener('click', () => {
    if(toggleTheme === 0) {
        document.documentElement.style.setProperty('--ecriture','#262626');
        document.documentElement.style.setProperty('--background','linear-gradient(to top, #076585, #e5e5e5)'); // Sky sur uiGradients
        toggleTheme++;
    } else {
        document.documentElement.style.setProperty('--ecriture','black'); //fff8f0
        document.documentElement.style.setProperty('--background','linear-gradient(to top, #232526, #414345)'); // Midnight City sur uiGradients
        toggleTheme--;
    }
})