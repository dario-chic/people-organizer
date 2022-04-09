import {d, w, n, ls, $form, $inputs, $tableBody, $allTR} from "./main.js";
import addPerson from "./add-person.js";

export default function add() {
	const $errorContainer = d.querySelector(".error");

	$inputs.forEach((input) => {
		const $li = d.createElement("li");
		$li.textContent = input.title;
		$li.classList.add("contact-form-error", "none");
		$li.id = input.name;
		d.querySelector(".error").appendChild($li);
	});

	d.addEventListener("click", (e) => {
		if (e.target === $form.add) {
			let cont = 0;

			$inputs.forEach((input) => {
				let value = input.value,
					regExp = new RegExp(input.pattern),
					$error = d.getElementById(`${input.name}`);
				$error.textContent = input.title;

				// * Validacion para saber si el usuario dejo el input vacio.
				if (value === "") {
					$error.textContent = `Please write ${input.name}`;
					$error.classList.add("is-active");
					cont++;
				} else {
					$error.classList.remove("is-active");
				}

				if (!regExp.test(value)) {
					$error.classList.add("is-active");
					cont++;
				} else {
					$error.classList.remove("is-active");
				}
			});

			if (cont > 0) {
				$errorContainer.classList.add("is-active");
			} else {
				addPerson(); //* Agrega nueva persona.
			}
		}
	});
	//
	d.addEventListener("submit", (e) => {
		e.preventDefault();
	});
}
