let btn_valor = document.querySelector("button");

btn_valor.addEventListener("click", function () {
    const produtos = {
        "Bau Hextec": 50,
        "Chave Hextec": 15,
        "Passe Supremo": 500,
        "Orbes Empíricos": 250,
        "Cromas Empíricos": 200

    };

    let produto = document.querySelector("select").value;

    if(produto in produtos) {
        document.querySelector("h3").textContent = `A compra de [ ${produto} ] que você escolheu é de [ ${produtos[produto]}RP ] `;
    } else {
        document.querySelector("h3").textContent = "Nenhum produto selecionado."
    }
});