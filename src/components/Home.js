import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

const Home = () => {
    return (

        <Card>
            <Card.Header as="h5">Bem vindo!</Card.Header>
            <Card.Body>
                <Card.Title className='mt-5'>Atividade de CRUD usando React</Card.Title>
                <Card.Text className="d-flex flex-column p-5 text-wrap">
                    <p className="">
                    </p>
                    <strong>Listar Usuários:</strong> Visualize todos os usuários cadastrados. A lista exibe o nome e e-mail de cada usuário.
                    <strong>Adicionar Usuário:</strong> Insira novos usuários na plataforma informando nome e e-mail. 
                    <strong>Editar Usuário:</strong> Se precisar alterar as informações de um usuário, você pode facilmente editar os dados diretamente na interface.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Home;