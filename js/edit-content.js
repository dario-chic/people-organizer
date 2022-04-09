import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";
import {toSaveInLocalStorage} from "./save-in-local-storage.js";
import {delAndEdit} from "./del-and-edit-btns.js";

let onlyOne = 0;

export default function editContent(e) {
	const $container = e.target.closest("tr"),
		$td = e.target.closest("td"),
		$backup = $td.cloneNode(true),
		$errorContainer = d.querySelector(".error");
	let $editForm;

	if (onlyOne === 0) {
		onlyOne++;

		const editForm = () => {
			$editForm = d.createElement("div");
			$editForm.className = `edit`;
			$editForm.id = `edit`;

			let $text = d.createElement("input"),
				$acceptBtn = d.createElement("button"),
				$cancelBtn = d.createElement("button");

			$text.setAttribute("type", "text");
			$text.className = "text-edit";
			$text.placeholder = `Edit Content....`;

			$acceptBtn.className = "inputs-name__add-button";
			$acceptBtn.textContent = "Accept";

			$acceptBtn.addEventListener("click", (e) => {
				let pattern = new RegExp($form[`${$td.className}`].pattern);

				if (!pattern.test($text.value)) {
					d.getElementById(`${$td.className}`).classList.add("is-active");
					$errorContainer.classList.add("is-active");
				} else {
					$container.replaceChild($backup, $editForm);
					$backup.textContent = $text.value.charAt(0).toUpperCase() + $text.value.slice(1).toLowerCase();

					delAndEdit($backup.className, $backup);
					toSaveInLocalStorage();

					onlyOne--;
				}
			});

			$cancelBtn.className = "inputs-name__del-button";
			$cancelBtn.textContent = "Cancel";
			$cancelBtn.addEventListener("click", (e) => {
				//  Se remplaza el form de edicion con el respaldo del <td>, el cual contiene exactamente lo que habia antes
				$container.replaceChild($backup, $editForm);
				// Tambien se borran los mensajes de error en caso de haber quitandole la clase a la <li> correspondiente y al contenedor de errores
				d.getElementById(`${$td.className}`).classList.remove("is-active");
				$errorContainer.classList.remove("is-active");

				// Se le vuelve a aplicar el addEventListener de click (para editar) al boton de edicion, ya que al volverlo a colocar, el nuevo ya no lo tiene
				$backup.querySelector("i").addEventListener("click", (e) => {
					editContent(e);
				});

				onlyOne--; // Ya que se terminó la edicion vuelve onlyOne a 0 para poder abrir otras ventanas
			});

			$editForm.appendChild($text);
			$editForm.appendChild($acceptBtn);
			$editForm.appendChild($cancelBtn);
		};

		editForm();
		$container.replaceChild($editForm, $td);
	}
}
