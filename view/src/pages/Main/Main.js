import React, { useEffect, useState } from 'react';
import { Container, Buttons } from './styles';
import {Link} from 'react-router-dom'
import api from '../../services/api'
import logo from '../../assets/Logo.svg'
import dislike from '../../assets/dislike.svg'
import like from '../../assets/like.svg'
export default function Main({ match }) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('devs', {
        headers: { user: match.params.id }
      })
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id])

  async function handleLike(id) {

  }
  async function handleDislike(id) {
    await api.post(`devs/${id}/dislikes`, null, { headers: { user: match.params.id } })

    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <Container>
      <Link to='/'><img src={logo} alt='tindev' /></Link>
      {users.length > 0 ? (
        <ul>
                 {users.map(user => (<li key={user._id}>
          <img src={user.avatar} alt={user.name} />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <Buttons>
            <button type='button' onClick={() => handleLike(user._id)}><img src={like} alt='like' /></button>
            <button type='button' onClick={() => handleDislike(user._id)}><img src={dislike} alt='dislike' /></button>
          </Buttons>
        </li>))}
        </ul>
      ): <div className="arrayVazio">"Volte mais tarde ;)"</div>}
    </Container>
  );
}
