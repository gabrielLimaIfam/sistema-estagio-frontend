import React from 'react';
import { FiUser, FiFileText, FiGitBranch, FiLogOut } from 'react-icons/fi'
import { GoBookmark } from 'react-icons/go'

import { Container } from './styles';

const Header = ( props ) => {
  return (
    <Container>

      <div className="main">
        SEP - SISTEMA DE ESTÁGIO E PROJETO
      </div>

      {
        props.isLogin &&
        <ul className="nav">
          <li className="nav-item">
            <FiUser />
            Perfil    
          </li>
          <li className="nav-item">
          <FiFileText />
            Documentos
          </li>
          <li className="nav-item">
            <FiGitBranch />
            Bancas
          </li>
          <li className="nav-item">
            <GoBookmark />
            Certificados
          </li>
          <li className="nav-item">
            <FiLogOut />
            Sair
          </li>
        </ul>
      }

    </Container>
  );
}

export default Header;