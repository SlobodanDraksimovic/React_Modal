import React, { useState } from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

export const Modal = ({ children }) => {   
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Show modal</button>
            {isOpen && (
                <ModalBackground onClick={() => setIsOpen(false)}>
                    <ModalWindow onClick={e => e.stopPropagation()}>
                        <button onClick={() => setIsOpen(false)}>Close</button>
                        {children}
                    </ModalWindow>
                </ModalBackground>
            )}
        </>
    )
}








