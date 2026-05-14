import assert from 'node:assert'
import { contabilizarQuantidadeDeCafe, contabilizarQuantidadeDeItem } from '../src/starbucks.js'

describe('Testes para gestão de cafeteria', () => {

    it('TC 1 - Ao menos 1 item na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
        ]
        const retornoEsperado = 1

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(quantidadeDeCafes, retornoEsperado)

    });

    it('TC 2 - Não ter nenhum item na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
        ]
        const retornoEsperado = 0

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(quantidadeDeCafes, retornoEsperado)

    });

    it('TC 3 - Ter 2 itens na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café", valor: 4.00 },
            { nome: "café com leite", valor: 5.00 },
        ]
        const retornoEsperado = 2

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(quantidadeDeCafes, retornoEsperado)

    });

    it('TC 4 - Retornar uma lista de pedidos vazia', () => {
        // Arrange
        const listaPedidos = []
        const retornoEsperado = 0

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(quantidadeDeCafes, retornoEsperado)

    });

    it('TC 5 - Filtrar por um item específico da lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café", valor: 4.00 },
            { nome: "café com leite", valor: 5.00 },
        ]
        const itemPesquisado = "bolo de cenoura"
        const retornoEsperado = 1

        // Act
        const quantidadeDeItens = contabilizarQuantidadeDeItem(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(quantidadeDeItens, retornoEsperado)

    });

});