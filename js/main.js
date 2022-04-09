import add from "./add-form.js";
import {delFormBtn} from "./del-and-edit-btns.js";
import {printLocalStorage, toSaveInLocalStorage} from "./save-in-local-storage.js";

export const d = document,
	w = window,
	n = navigator,
	ls = localStorage,
	$form = d.getElementById("add-form"),
	$inputs = d.querySelectorAll("#add-form input[required]"),
	$tableBody = d.getElementById("table-body"),
	$allTR = d.querySelectorAll(".table-body tr");

d.addEventListener("DOMContentLoaded", (e) => {
	add(); // * Funcion que sirve para agregar usuario a la lista

	printLocalStorage(); // * Funcion para agregar al documento los usuarios guardados en el LocalStorage en caso de recarga

	delFormBtn(); //* Funcion para eliminar el ultimo usuario cuando se haga click en el Delete del Form
});
