import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";
import {toSaveInLocalStorage} from "./save-in-local-storage.js";
import toFixTR from "./to-fix-trows-id.js";
import editContent from "./edit-content.js";

export function delFormBtn() {
	d.addEventListener("click", (e) => {
		if (e.target === $form.del) {
			$tableBody.removeChild($tableBody.lastElementChild);
			toSaveInLocalStorage();
		}
	});
}

export function delAndEdit(element, container) {
	let btn = d.createElement("i");
	btn.className = `far fa-edit`;
	container.appendChild(btn);

	btn.addEventListener("click", (e) => {
		editContent(e);
	});

	if (element == "firstName") {
		let btn = d.createElement("i");
		btn.className = `fas fa-user-times`;
		container.appendChild(btn);

		btn.addEventListener("click", (e) => {
			$tableBody.removeChild(e.target.closest("tr"));
			toFixTR();
			toSaveInLocalStorage();
		});
	}
}
