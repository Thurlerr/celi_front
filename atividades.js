function getActivities() {
  return fetch("./Json/atividade.json").then((r) => r.json());
}

function renderActivities(activities) {
  const target = document.querySelector(".lista-atividades");
  target.innerHTML = "";

  activities.forEach((activity) => {
    const activityElement = createActivityElement(activity);
    target.appendChild(activityElement);
  });
}

function createActivityElement(activity) {
  const activityElement = document.createElement("div");
  activityElement.classList.add("atividade", "mb");

  activityElement.innerHTML = `
        <div class="texto-atividade">
            <h2>${activity.nome}</h2>
            <a href="./atividade.html/?id=${activity.id}">Detalhes</a>
            <p>${activity.descricao}</p>
        </div>
        <button>Inscreva-se</button>
    `;

  return activityElement;
}

async function init() {
  const data = await getActivities();
  renderActivities(data);
}

init();
