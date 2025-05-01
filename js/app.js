const refSwitch = document.getElementById("pricing");
const refAnually = document.querySelectorAll(".anually");
const refMonthly = document.querySelectorAll(".monthly");

refSwitch.addEventListener('change', manipulerSwitch);

/**
 * Fonction qui permet de manipuler l'affichage des prix en fonction de la valeur du switch
 * @param {event} e - l'événement de changement du switch
 */
function manipulerSwitch(e) {
    if (e.target.checked) {
        refAnually.forEach(element => element.classList.add('hidden'));
        refMonthly.forEach(element => element.classList.remove('hidden'));
    } else {
        refAnually.forEach(element => element.classList.remove('hidden'));
        refMonthly.forEach(element => element.classList.add('hidden'));
    }
}