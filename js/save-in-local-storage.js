import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";
import {delAndEdit} from "./del-and-edit-btns.js";

export function toSaveInLocalStorage() {
	let $savedTable = [];

	let $allTR = Array.from(d.querySelectorAll(".table-body tr"));

	$allTR.forEach((tr) => {
		let $id = tr.getAttribute("id"); 

		$savedTable.push(
			new Object({
				firstName: d.querySelector(`#${$id} .firstName`).textContent,
				lastName: d.querySelector(`#${$id} .lastName`).textContent,
				age: d.querySelector(`#${$id} .age`).textContent,
				country: d.querySelector(`#${$id} .country`).textContent,
			}),
		);
	});

	ls.setItem("saved", JSON.stringify($savedTable));
}

export function printLocalStorage() {
	const $lsTable = JSON.parse(ls.getItem("saved"));

	$lsTable.forEach((obj) => {
		let ID = d.querySelectorAll(".table-body tr").length + 1;

		const $newTR = d.createElement("tr");
		$newTR.id = `User${ID}`;
		$newTR.className = `User`;
		$tableBody.appendChild($newTR);

		Object.entries(obj).forEach(([key, value]) => {
			const $newTD = d.createElement("td");
			$newTD.id = `${key + ID}`;
			$newTD.className = `${key}`;
			$newTD.textContent = `${value}`;
			$newTR.appendChild($newTD);

			delAndEdit(key, $newTD);
		});
	});
}
