import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";
import {delAndEdit} from "./del-and-edit-btns.js";
import {toSaveInLocalStorage} from "./save-in-local-storage.js";

//* Funcion que sirve para agregar personas una vez se hayan validado los datos.
export default function addPerson() {
	let ID = d.querySelectorAll(".table-body tr").length + 1;

	const $newTR = d.createElement("tr");
	$newTR.id = `User${ID}`;
	$newTR.className = `User`;
	$tableBody.appendChild($newTR);

	$inputs.forEach((input) => {
		const $newTD = d.createElement("td");
		$newTD.id = `${input.name + ID}`;
		$newTD.className = `${input.name}`;
		$newTD.textContent = `${input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase()}`;
		$newTR.appendChild($newTD);

		delAndEdit(input.name, $newTD);
		input.value = "";
	});
	toSaveInLocalStorage();
}
