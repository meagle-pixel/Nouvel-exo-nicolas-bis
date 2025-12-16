
const API_KEY = "512de027-801b-4399-a599-e5434caff044";

async function loadPlanets() {
  try {
    const response = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    const data = await response.json();
    console.log(data); // ← ici tu verras tout le JSON
  } catch (err) {
    console.error("Erreur API :", err);
  }
}

loadPlanets();
