export function contabilizarQuantidadeDeCafe(listaPedidos) {

    let quantidadeCafe = 0

    for (let i = 0; i < listaPedidos.length; i++) {


        if (listaPedidos[i].nome == "café") {
            quantidadeCafe++
        }
    }

    return quantidadeCafe

}