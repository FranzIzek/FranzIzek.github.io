let view = document.getElementById("view");

function addToView(value) {
    view.value += value;
}

function clearView() {
    view.value = "";
}

function result() {
    try {
        view.value = eval(view.value);
    } catch {
        view.value = "Error";
    }
}
