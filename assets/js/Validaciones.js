import { tiposDeError, mensajes } from "./customErrors.js"
export function verificarCampo(campo) {
    let mensaje = ""
    campo.setCustomValidity("")
    tiposDeError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
        }
    })
    const mensajeError = campo.parentNode.querySelector(".mensaje-error")
    if (mensaje) {
        campo.setCustomValidity(mensaje);
        mensajeError.textContent = mensaje;
    } else {
        campo.setCustomValidity("");
        mensajeError.textContent = "";
    }
}