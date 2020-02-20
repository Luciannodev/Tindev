import React, { useState } from 'react';
import logo from '../../assets/Logo.svg'
import api from '../../services/api'
import { Container } from './styles'
export default function Login({history}) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/devs',{
            username,
        })
        const {_id} = response.data

        history.push(`/dev/${_id}`)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuario do GitHub" />
                <button type="submit">Enviar</button>
            </form>
        </Container>
    );
}
