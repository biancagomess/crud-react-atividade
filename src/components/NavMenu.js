import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/home" className='.text-light'>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/users">Listar usuários </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/add-user">
            Adicionar usuário
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavMenu;