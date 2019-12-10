idPer = 1
class Perguntas { 
    constructor(pergunta, alternativa, resposta) { 
        this._idPer= idPer
        this._pergunta = pergunta 
        this._alternativa= alternativa
        this._resposta = resposta
        idPer ++
    }
    getPergunta() { 
        return this._pergunta 
    } 
    getAlternativa(){
      return this._alternativa 
    }
    getReposta(){
      return this._resposta
    }
} 