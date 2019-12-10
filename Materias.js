idMat= 1
class Materias { 
    constructor(materia, perguntas) { 
        this._idMat= idMat
        this._materia = materia 
        idMat ++  
    } 
    getMateria() { 
        return this._materia 
    }
    mostrarDadosmat() { 
        return 'Matéria:' + this._materia  
    } 
} 