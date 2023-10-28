import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact';

export default function App() {
    return (
        <>

            <header>
                <h1>Ola</h1>

                <nav>

                    <Link to="/Home">Home</Link>

                    <Link to="/Contact">Contato</Link>

                </nav>
            </header>

            <hr />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />

            </Routes>
        </>
    );
};