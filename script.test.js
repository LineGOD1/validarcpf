/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test('validar cpf', function () {
    var resultado = validarCPF('52861042826') ;
    expect(resultado).toBe(true);
})
test('validar cpf', function () {
    var resultado = validarCPF(59999475201) ;
    expect(resultado).toBe(false);
})