import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";

//* Función para repara la enumeracion de las filas en caso de borrar elementos.
export default function toFixTR() {
	let $allTR = Array.from(d.querySelectorAll(".table-body tr"));

	$allTR.forEach((trow, index) => {
		trow.id = `User${index + 1}`;
		Array.from(trow.children).forEach((child) => (child.id = `${child.className + (index + 1)}`));
	});
}
