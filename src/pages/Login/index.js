import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './../../components/Footer'
import Header from './../../components/Header'

import { Container, Main, Form } from './styles';

const Login = () => {
  
  function handleLogin(event){
    event.preventDefault();

    console.log("Logado")
  }
    return (
    <Container>
      <Header />
  
      <Main>
        <div className="box" id="aluno">
          <a href="/">
              <h6 className="link">
                  Aluno(a)
              </h6>
              <p>
                  (Discente)
              </p>
          </a>
        </div> 
      
        <div className="box" id="aluno">
          <a href="/">
              <h6 className="link">
                  Coordenador(a)
              </h6>
              <p>
                  (Discente)
              </p>
          </a>
        </div>       
      
        <div className="box" id="prof">
          <a href="/">
              <h6 className="link">
                  Professor(a)
              </h6>
              <p>
                  (Docente)
              </p>
          </a>
        </div>
      </Main>

      <h5 className="text">
          Esqueceu o Login?
          <Link to="/" className="recover">
               Clique aqui.
          </Link>
      </h5>
      
      <Form onSubmit={handleLogin}>
        <div className="form-group">
            <label>Entrar no Sistema</label>
            
            <input 
              type="email" 
              className="form-control" 
              id="login" 
              placeholder="E-mail ou Matrícula" 
            />
            
            <input 
              type="password" 
              className="form-control" 
              id="senha" 
              placeholder="Senha" 
            />
            <button type="submit" className="btn">Entrar</button>
        </div> 
      </Form>

      <Footer />
    </Container>
  );
}

export default Login;