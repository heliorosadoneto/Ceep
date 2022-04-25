import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      notas : []
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(0,1);
    console.log("deletar")
    this.setState({notas:arrayNotas})
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
