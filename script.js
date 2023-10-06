const addBtn = document.getElementById("add");
const btnTask = document.getElementById("btnTask");
const btnObjective = document.getElementById("btnObjective");
const btnClose = document.getElementById("btnClose");

const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

const taskForm = document.getElementById("newTask");
const objForm = document.getElementById("newObjective");

const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const objectiveName = document.getElementById("objectiveName");
const objectiveDesc = document.getElementById("objectiveDesc");

//Fenêtre Pop-up
function showPopup() {
    overlay.style.display = "block";
  }
  
  function closePopup() {
    overlay.style.display = "none";
    taskForm.style.display = "none";
    objForm.style.display = "none";
    taskForm.reset();
    objForm.reset();
  }
  
  function showTaskPopup() {
    overlay.style.display = "block";
    taskForm.style.display = "block";
    objForm.style.display = "none";
  }
  
  function showObjectivePopup() {
    overlay.style.display = "block";
    taskForm.style.display = "none";
    objForm.style.display = "block";
  }
  
  function closeTaskPopup() {
    overlay.style.display = "none";
      taskForm.style.display = "none";
      objForm.style.display = "none";
      taskForm.reset();
      objForm.reset();
  }
  
  function closeObjPopup() {
    overlay.style.display = "none";
      taskForm.style.display = "none";
      objForm.style.display = "none";
      taskForm.reset();
      objForm.reset();
  }
  
  addBtn.addEventListener("click",showPopup );
  btnTask.addEventListener("click", showTaskPopup);
  btnObjective.addEventListener("click", showObjectivePopup);
  
  btnClose.addEventListener("click", closePopup);
  
  taskCancel.addEventListener("click", closePopup);
  objectiveCancel.addEventListener("click", closeObjPopup);
  
  
  //Ajout de la tâche
  taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = taskName.value;
      const description = taskDesc.value;
  
      createTask(name, description);
  
      closePopup();
  });
  
  function createTask(name, description) {
      const tasksSection = document.getElementById("taches");
      const prioritiesSection = document.getElementById("priorites");
  
      const taskArticle = document.createElement("article");
      taskArticle.classList.add("taches");
  
      const taskNameHeader = document.createElement("h3");
      taskNameHeader.textContent = name;
  
      const taskDescPara = document.createElement("p");
      taskDescPara.textContent = description;
  
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
  };
  
  //Ajout de l'objectif 
  objForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = objectiveName.value;
    const description = objectiveDesc.value;
  
    createObjective(name, description);
  
    closePopup();
  });
  
  function createObjective(name, description) {
    const objectivesSection = document.getElementById("objectifs");
  
    const objectiveArticle = document.createElement("article");
    objectiveArticle.classList.add("objectifs");
  
    const objectiveNameHeader = document.createElement("h3");
    objectiveNameHeader.textContent = name;
  
    const objectiveDescPara = document.createElement("p");
    objectiveDescPara.textContent = description;
  
    objectiveArticle.appendChild(objectiveNameHeader);
    objectiveArticle.appendChild(objectiveDescPara);
  
    objectivesSection.appendChild(objectiveArticle);
  };
  
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        // Si le clic est sur un bouton de suppression
        const taskArticle = e.target.parentElement; // Sélectionnez l'article parent
  
        // Vérifiez dans quelle section se trouve la tâche et supprimez-la de la section appropriée
        if (taskArticle.parentElement === tasksSection) {
            tasksSection.removeChild(taskArticle);
        } else if (taskArticle.parentElement === prioritiesSection) {
            prioritiesSection.removeChild(taskArticle);
        } else if (taskArticle.parentElement === objectivesSection) {
            objectivesSection.removeChild(taskArticle);
        }
    }
  });
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