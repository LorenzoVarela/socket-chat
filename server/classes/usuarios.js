class Usuarios {
    constructor() {
        this.personas = [];
    }


    // Agregamos al arreglo de personas a una nueva persona
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);
        return this.personas;
    }

    // Obtener una persona en particular por el id
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    // Obtener toda la lista de las personas.
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSalas(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala == sala);
        return personasEnSala;

    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}