document.getElementById("OK").addEventListener("click", function () {
    let name = document.getElementById("username").value;
    let countChoice = parseInt(document.getElementById("pilihanCount").value);
    let container = document.getElementById("container");

    if (!name) {
        alert("Masukkan nama dengan benar");
        return;
    } else if (isNaN(countChoice) || countChoice <= 0) {
        alert("Masukkan jumlah pilihan dengan benar");
        return;
    } else if (countChoice > 10) {
        alert("Jumlah pilihan tidak boleh lebih dari 10");
        return;
    }

    document.getElementById("OK").classList.add("hidden");

    let choiceForm = document.createElement("form");
    choiceForm.id = "choiceForm";
    choiceForm.appendChild(document.createElement("hr"));
    choiceForm.appendChild(document.createElement("br"));

    for (let i = 1; i <= countChoice; i++) {
        let label = document.createElement("label");
        label.textContent = "Pilihan " + i + " :";
        let input = document.createElement("input");
        input.type = "text";
        input.id = "choice" + i; // FIXED: Unique ID for each input

        choiceForm.appendChild(label);
        choiceForm.appendChild(input);
        choiceForm.appendChild(document.createElement("br"));
    }

    let submitButton = document.createElement("button");
    submitButton.textContent = "OK";
    submitButton.type = "button";
    submitButton.id = "choiceSubmit";

    submitButton.addEventListener("click", function () {
        let choiceFilled = [];
        for (let i = 1; i <= countChoice; i++) {
            let valuePut = document.getElementById("choice" + i).value; // FIXED: Correct ID reference
            if (!valuePut) { // FIXED: Correct variable name
                alert("Harap mengisi seluruh pilihan");
                return;
            }
            choiceFilled.push(valuePut);
        }

        submitButton.classList.add("hidden");
        choiceForm.appendChild(document.createElement("br"));
        choiceForm.appendChild(document.createElement("hr"));

        let showChoice = document.createElement("div");
        let choiceLabel = document.createElement("p");
        choiceLabel.textContent = "Pilihan:";
        showChoice.appendChild(choiceLabel);

        choiceFilled.forEach((text) => {
            let radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "singleChoice";
            radioInput.value = text;

            let label = document.createElement("label");
            label.textContent = text;

            showChoice.appendChild(radioInput);
            showChoice.appendChild(label);
            showChoice.appendChild(document.createElement("br"));
        });

        let finalSubmit = document.createElement("button");
        finalSubmit.textContent = "OK";
        finalSubmit.type = "button";

        finalSubmit.addEventListener("click", function () {
            let selected = document.querySelector('input[name="singleChoice"]:checked');
            if (!selected) {
                alert("Harap pilih salah satu opsi!");
                return;
            }

            let finalMsg = document.createElement("p"); // FIXED: Create a new paragraph element
            finalMsg.textContent = `Perkenalkan nama saya ${name}, saya memiliki ${countChoice} pilihan yaitu ${choiceFilled.join(", ")}. Pilihan saya adalah ${selected.value}`;

            container.appendChild(finalMsg);
        });

        showChoice.appendChild(finalSubmit);
        container.appendChild(showChoice);
    });

    choiceForm.appendChild(submitButton);
    container.appendChild(choiceForm);
});
