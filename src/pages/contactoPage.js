import React from 'react';

const ContactoPage= (props) => {
    return (
        <div>
            <input type="text" name="e-mail" placeholder="Correo electrónico" />
            <input type="text" name="nombre" placeholder="Ingrese su nombre" />
            <input type="text" name="asunto" placeholder="Asunto" />
            <input type="text" name="mensaje" placeholder="Escriba su mensaje" />
            <input type="button" value="Enviar" />
        </div>
    );

}

export default ContactoPage;