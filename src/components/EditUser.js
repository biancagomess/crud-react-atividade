import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../services/service-api';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser(userId); 
        setUser(fetchedUser); 
        setLoading(false); 
      } catch (err) {
        setError('Erro ao carregar o usuário');
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userId, user);
      navigate('/users')
    } catch (err) {
      setError('Erro so atualizar')
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
 <div>
<h2 className="mt-4 mb-5">Adicionar Novo Usuário</h2>
<Form onSubmit={handleSubmit}>
  <Row className="align-items-center d-flex justify-content-center flex-column ">
    <Col sm={3} className="my-5">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="nome" type="text"
       value={user.name}
       onChange={handleChange}
        required />
    </Col>
    <Col xs={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
        Email
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control
          id="inlineFormInputGroupUsername"
          placeholder="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </InputGroup>
    </Col>
    <Col xs="auto" className="my-5">
      <Button type="submit">Atualiar</Button>
    </Col>
  </Row>
</Form>
</div>
  );
};

export default EditUser;