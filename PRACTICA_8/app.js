for (let i = 1; i <= 4; i++) {
    console.log(i);

    let fila = "";
    console.log(fila);
    console.log("aqui entra al segundo for");

    for (let j = 1; j <= 4; j++) {
        console.log(j);
        fila += "* ";
        console.log(fila);
    }

    console.log(fila);
}